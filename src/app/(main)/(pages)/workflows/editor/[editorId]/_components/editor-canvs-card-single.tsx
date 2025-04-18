import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { Position, useNodeId } from "@xyflow/react";
import React, { useMemo } from "react";
import EditorCanvasIconHelper from "./editor-canvas-card-icon-helper";
import CustomHandle from "./custom-handle";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);

  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
    </>
  );
};

export default EditorCanvasCardSingle;

//3:44:17
