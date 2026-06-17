import Tiptap from "@/components/common/editor/tiptap";
import { Editor } from "@tiptap/react";

interface WriteEditorProps {
  editor: Editor | null;
  characterCount: number;
}

export default function WriteEditor({editor, characterCount}:WriteEditorProps) {
  return(
    <div>
      <div className="flex my-3">
        <p className="text-xl font-bold">게시글 작성</p>
      </div>
      <Tiptap editor={editor} charactorCount={characterCount} />
    </div>
  )
}