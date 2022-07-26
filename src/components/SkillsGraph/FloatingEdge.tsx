import { useCallback } from "react";
import { useStore, getBezierPath, EdgeProps } from "react-flow-renderer";
import { getEdgeParams } from "./utils";

function FloatingEdge({
  id,
  source,
  target,
  markerEnd,
  style,
}: Partial<EdgeProps>) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source!), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target!), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  const d = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <g className="react-flow__connection">
      <path
        id={id}
        className="react-flow__edge-path"
        d={d}
        markerEnd={markerEnd}
        style={style}
      />
    </g>
  );
}

export default FloatingEdge;
