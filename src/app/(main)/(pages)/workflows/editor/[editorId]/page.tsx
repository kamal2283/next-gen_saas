import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import React from "react";
import EditorCanvas from "./_components/editor-canvas";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <div className="h-full">
          <ConnectionsProvider>
            <EditorCanvas />
          </ConnectionsProvider>
        </div>
      </EditorProvider>
    </div>
  );
};

export default Page;

//3:35:02
