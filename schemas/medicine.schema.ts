import z from "zod";

export const medicineReviewSchema = z.object({
  rating: z.number().int().min(1, "평점을 선택해주세요.").max(5, "평점은 최대 5점입니다."),

  purpose: z.enum([
    "headache", "toothache", "fever", "muscle_pain", "menstrual_pain", "other"
  ], {message: "복용 목적을 선택해주세요."}),

  effect: z.enum(["EFFECTIVE", "INEFFECTIVE"], {
    message: "효과 여부를 선택해주세요."
  }),

  sideEffect: z.enum(["yes", "no"], {
    message: "부작용 여부를 선택해주세요."
  }),

  content: z.string().min(10, "후기는 최소 10자 이상 작성해주세요.").max(500, "후기는 최대 500자까지 작성하실 수 있습니다.")
})

export type MedicineReviewFormValues = z.infer<typeof medicineReviewSchema>