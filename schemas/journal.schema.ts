import z from "zod";

export const journalSchema = z.object({
  journalDate: z.string(),

  conditionStatus: z.enum([
    "EXCELLENT", "GOOD", "NORMAL", "BAD", "AWFUL"
  ]),

  painScore: z.number().min(0, "통증 점수는 0 이상이어야 합니다.").max(10, "통증 점수는 10 이하여야 합니다."),

  content: z.string().max(50, "내용은 50자 이하로 입력해주세요."),

  symptoms: z.array(z.string()),

  supplements: z.array(z.string())
})

export type JournalFormValues = z.infer<typeof journalSchema>;