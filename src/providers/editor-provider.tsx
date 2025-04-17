"use client";

import { EditorActions, EditorNodeType } from "@/lib/types";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export type EditorNode = EditorNodeType;

export type Editor = {
  elements: EditorNode[];
  edges: {
    id: string;
    source: string;
    target: string;
  }[];
  selectedNode: EditorNodeType;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

const initialEditorState: EditorState["editor"] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: "",
      metadata: {},
      title: "",
      type: "Trigger",
    },
    id: "",
    position: { x: 0, y: 0 },
    type: "Trigger",
  },
  edges: [],
};

const initialiHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialiHistoryState,
};

const editorReducer = (
  state: EditorState = initialState,
  action: EditorActions
) => {};

//3:26:12
