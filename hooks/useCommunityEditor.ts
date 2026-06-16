"use client";

import { useState } from "react";
import { useEditor } from "@tiptap/react";

import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

export default function useCommunityEditor() {
  const [characterCount, setCharacterCount] = useState(0);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "질병 후기나 복용 경험을 작성해주세요.",
      }),
      CharacterCount.configure({
        limit: 2000,
      }),
      Image,
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setCharacterCount(editor.storage.characterCount.characters());
    },
    immediatelyRender: false,
  });

  return { editor, characterCount };
}
