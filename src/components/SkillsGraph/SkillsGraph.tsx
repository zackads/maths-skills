import ReactFlow, { Node, Edge } from "react-flow-renderer";
import { Skill } from "../../model/Skill";
import Elk, { ElkNode, ElkPrimitiveEdge } from "elkjs";
import { toEdges } from "./toEdges";
import { toNodes } from "./toNodes";
import { useEffect, useState } from "react";

const DEFAULT_WIDTH = 75;
const DEFAULT_HEIGHT = 75;

const elk = new Elk({
  defaultLayoutOptions: {
    "elk.algorithm": "layered",
    "elk.direction": "DOWN",
    "elk.spacing.nodeNode": "75",
    "elk.layered.spacing.nodeNodeBetweenLayers": "75",
  },
});

const layoutNodes = async (skills: Skill[]): Promise<Node[]> => {
  const elkNodes: ElkNode[] = [];
  const elkEdges: ElkPrimitiveEdge[] = [];
  const flowNodes: Node[] = toNodes(skills);
  const flowEdges: Edge[] = toEdges(skills);

  flowNodes.forEach((skill) => {
    elkNodes.push({
      id: skill.id,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
    });
  });

  flowEdges.forEach(({ id, target, source }) => {
    elkEdges.push({ id, target, source });
  });

  const newGraph = await elk.layout({
    id: "root",
    children: elkNodes,
    edges: elkEdges,
  });

  return flowNodes.map((flowNode) => {
    const node = newGraph?.children?.find((n) => n.id === flowNode.id);
    if (node?.x && node.y && node?.width && node?.height) {
      flowNode.position = {
        x: node.x - node.width / 2 + Math.random() / 1000,
        y: node.y - node.height / 2,
      };
    }
    return flowNode;
  });
};

export function SkillsGraph({ skills }: { skills: Skill[] }) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    layoutNodes(skills).then((nodes) => setNodes(nodes));
  }, [skills]);

  if (!nodes) return <div>Loading...</div>;

  return (
    <ReactFlow
      nodes={nodes}
      edges={toEdges(skills)}
      fitView
      fitViewOptions={{
        padding: 0.2,
      }}
    />
  );
}