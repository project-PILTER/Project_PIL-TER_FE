import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(1, "비밀번호를 입력해주세요.")
});

export const signupSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 8자 이상 16글자 이하여야 합니다.").max(16, "비밀번호는 8자 이상 16글자 이하여야 합니다."),
  passwordConfirm: z.string(),
})
.refine(
  (data) => data.password === data.passwordConfirm,
  {
    path: ["passwordConfirm"],
    message: "비밀번호가 일치하지 않습니다."
  }
)