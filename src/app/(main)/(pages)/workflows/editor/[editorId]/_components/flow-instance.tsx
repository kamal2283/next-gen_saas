"use client";
import { Button } from "@/components/ui/button";
// Import from your own provider instead of @xyflow/react
import { useNodeConnections } from "@/providers/connections-provider";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import {
  onCreateNodesEdges,
  onFlowPublish,
} from "../_actions/workflow-connections";

type Props = {
  children?: React.ReactNode;
  edges: any[];
  nodes: any[];
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState([]);
  // Use your custom hook from connections.provider.tsx
  const { nodeConnection } = useNodeConnections();

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split("/").pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (flow) toast.message(flow.message);
  }, [edges, isFlow, nodes, pathname]);

  /**
   * Handles the publication of a workflow.
   * Retrieves the editorId from the URL pathname, then calls onFlowPublish with this ID.
   * If onFlowPublish returns a response, displays it as a toast message.
   *
   * @returns {Promise<void>} Promise that resolves when the workflow is published
   */
  const onPublishWorkflow = useCallback(async () => {
    // Extract the editorId from the URL pathname
    const response = await onFlowPublish(pathname.split("/").pop()!, true);
    if (response) toast.message(response);
  }, [pathname]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
          Save
        </Button>
        <Button onClick={onPublishWorkflow} disabled={isFlow.length < 1}>
          Publish
        </Button>
      </div>
      {children}
    </div>
  );
};

export default FlowInstance;
