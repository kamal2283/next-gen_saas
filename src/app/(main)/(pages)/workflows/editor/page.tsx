"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function WorkflowEditorPage() {
  //CHALLENGE: If the user tries to access this route you should send them to their first workflow they have or create one or you can have your own behavior.s
  const router = useRouter();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    // Only run once auth is loaded
    if (!isLoaded) return;

    async function redirectToFirstWorkflow() {
      try {
        // Fetch user's workflows
        const response = await fetch(`/api/workflows?userId=${userId}`);
        const data = await response.json();

        if (data.workflows && data.workflows.length > 0) {
          // Redirect to first workflow if exists
          router.replace(`/workflows/${data.workflows[0].id}`);
        } else {
          // Redirect to workflow creation page if no workflows exist
          router.replace("/workflows/new");
        }
      } catch (error) {
        console.error("Error fetching workflows:", error);
        // Fallback to workflows list page on error
        router.replace("/workflows");
      }
    }

    redirectToFirstWorkflow();
  }, [router, userId, isLoaded]);

  // Show loading state while redirecting
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-2 text-muted-foreground">
        Redirecting to your workflow...
      </p>
    </div>
  );
}
