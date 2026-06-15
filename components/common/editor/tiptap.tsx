"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Image from "@tiptap/extension-image";
import Toolbar from "./toolbar";
import { useState } from "react";

export default function Tiptap() {
  const [preview, setPreview] = useState(false);
  const [charactorCount, setCharactorCount] = useState(0);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !editor) return;

    const imageUrl = URL.createObjectURL(file);

    editor.chain().focus().setImage({ src: imageUrl }).run();
  };

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
      setCharactorCount(editor.storage.characterCount.characters());
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="relative rounded-lg border-2 focus-within:border-violet-400 overflow:hidden">
      <Toolbar
        editor={editor}
        onImageUpload={handleImageUpload}
        onPreview={() => setPreview(true)}
      />
      <EditorContent
        editor={editor}
        className="tiptap prose max-w-none min-h-[25rem] p-4 dark:prose-invert"
      />
      <div className="absolute bottom-3 right-4 text-sm text-muted-foreground">
        {charactorCount}자
      </div>
    </div>
  );
}
