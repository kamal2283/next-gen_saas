import { ConnectionProviderProps } from "@/providers/connections.provider";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("required"),
  name: z.string().min(1, "required"),
});

export type ConnectionTypes = "Google Drive" | "Notion" | "Slack" | "Discord";

export type Connection = {
  title: ConnectionTypes;
  description: string;
  image: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};
