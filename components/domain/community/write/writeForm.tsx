import AppSelect from "@/components/common/appSelect";
import { Input } from "@/components/ui/input";
import { WriteFormProps } from "@/types/community.type";
import { categories } from "../categoryExamples";

export default function WriteForm({title, categoryId, onTitleChange, onCategoryChange}:WriteFormProps) {
  return(
    <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xl font-semibold">카테고리 선택</label>
          <AppSelect
            value={categoryId}
            placeholder="카테고리 선택"
            options={categories}
            onValueChange={onCategoryChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xl font-semibold">제목</label>
          <Input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="제목을 입력하세요"
            maxLength={100}
            autoComplete="off"
            spellCheck={false}
            className="h-11 mt-2 focus-visible:border-violet-500"
          />
          <p className="text-right text-sm text-muted-foreground">
            {title.length}/100
          </p>
        </div>
      </div>
  )
}