import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  Node,
} from "react-flow-renderer";
import { Skill } from "../../model/Skill";
import Elk, { ElkNode, ElkPrimitiveEdge } from "elkjs";
import { toEdges } from "./toEdges";
import { toNodes } from "./toNodes";
import { useEffect, useState } from "react";
import { SkillNode } from "./SkillNode";
import FloatingEdge from "./FloatingEdge";

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 200;

const elk = new Elk({
  defaultLayoutOptions: {
    "elk.algorithm": "force",
    "elk.spacing.nodeNode": "1",
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

const nodeTypes = { skill: SkillNode };

const edgeTypes = { floating: FloatingEdge };

export function SkillsGraph({ skills }: { skills: Skill[] }) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    layoutNodes(skills).then((nodes) => setNodes(nodes));
  }, [skills]);

  if (!nodes) return <div>Loading...</div>;

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodes={nodes}
      edges={toEdges(skills)}
      fitView
      fitViewOptions={{
        padding: 0.2,
      }}
    >
      <Background variant={BackgroundVariant.Dots} gap={30} size={1} />
    </ReactFlow>
  );
}
