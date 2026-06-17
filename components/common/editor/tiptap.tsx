"use client";

import { Editor, EditorContent } from "@tiptap/react";
import Toolbar from "./toolbar";
import { useState } from "react";

interface TiptapProps {
  editor: Editor | null;
  charactorCount: number;
}

export default function Tiptap({editor, charactorCount}:TiptapProps) {
  const [preview, setPreview] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !editor) return;

    const imageUrl = URL.createObjectURL(file);

    editor.chain().focus().setImage({ src: imageUrl }).run();
  };

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
