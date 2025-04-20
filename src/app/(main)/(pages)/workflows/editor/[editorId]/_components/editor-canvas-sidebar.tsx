("");
import { EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { useNodeConnections } from "@xyflow/react";
import React from "react";

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const { state } = useEditor();
  const nodeConnection = useNodeConnections();
  return <div>EditorCanvasSidebar</div>;
};

export default EditorCanvasSidebar;
