import z from "zod";

export const commentSchema = z.object({
  content: z.string().min(1, "댓글 내용을 입력해주세요.").max(100, "댓글은 최대 100자까지 가능합니다.")
})

export type CommentFormData = z.infer<typeof commentSchema>;