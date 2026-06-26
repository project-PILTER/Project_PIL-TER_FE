import z from "zod";

export const profileSchema = z.object({
  nickname: z.string().trim().min(2, "닉네임은 2글자 이상 입력해주세요.").max(10, "닉네임은 10글자 이하로 입력해주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다.").trim()
})

export type ProfileFormValues = z.infer<typeof profileSchema>