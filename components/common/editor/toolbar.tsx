import { ToolbarProps } from "@/types/ui.type";
import {
  Bold,
  Eye,
  ImageIcon,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Quote,
} from "lucide-react";
import ToolButton from "./toolButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Toolbar({
  editor,
  onImageUpload,
  onPreview,
}: ToolbarProps) {
  const addLink = () => {
    const url = window.prompt("링크 입력");

    if (!url) return;

    editor?.chain().focus().setLink({ href: url }).run();
  };
  return (
    <div className="flex items-center justify-between border-b px-4 py-2">
      <div className="flex items-center gap-1">
        <ToolButton tooltip="굵게" onClick={() => editor?.chain().focus().toggleBold().run()}>
          <Bold size={18} />
        </ToolButton>
          
        <ToolButton tooltip="기울임" onClick={() => editor?.chain().focus().toggleItalic().run()}>
          <Italic size={18} />
        </ToolButton>

        <div className="mx-2 h-5 w-px bg-gray-300" />

        <ToolButton tooltip="글머리 기호 목록" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
          <List size={18} />
        </ToolButton>

        <ToolButton tooltip="번호 목록" onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={18} />
        </ToolButton>

        <div className="mx-2 h-5 w-px bg-gray-300" />

        <ToolButton tooltip="인용문" onClick={() => editor?.chain().focus().toggleBlockquote().run()}>
          <Quote size={18} />
        </ToolButton>
        
        <ToolButton tooltip="링크추가" onClick={addLink}>
          <LinkIcon size={18} />
        </ToolButton>

        <div className="mx-2 h-5 w-px bg-gray-300" />

        <Tooltip>
          <TooltipTrigger asChild>
            <label className="cursor-pointer">
              <ImageIcon />
              <input hidden type="file" accept="image/*" onChange={onImageUpload} />
            </label>
          </TooltipTrigger>
          <TooltipContent>
            <p>이미지 추가</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <ToolButton tooltip="미리보기" onClick={onPreview} className="flex items-center gap-2">
        <Eye size={18} />
      </ToolButton>
    </div>
  );
}
