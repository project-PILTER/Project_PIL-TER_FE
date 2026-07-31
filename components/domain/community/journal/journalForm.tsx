import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { JournalFormValues, journalSchema } from "@/schemas/journal.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Frown, Meh, Smile } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

interface JournalFormProps {
  defaultValues?: Partial<JournalFormValues>;
  onSubmit: (data: JournalFormValues) => void;
  onCancel?: () => void;
}

const symptomOptions = [
  "두통",
  "복통",
  "어지러움",
  "피로감",
  "불면증",
  "근육통",
  "기침",
  "콧물",
  "인후통",
  "메스꺼움",
  "소화불량",
  "알레르기",
];

export default function JournalForm({
  defaultValues,
  onSubmit,
  onCancel,
}: JournalFormProps) {
  const form = useForm<JournalFormValues>({
    resolver: zodResolver(journalSchema),

    defaultValues: {
      journalDate:
        defaultValues?.journalDate || new Date().toISOString().split("T")[0],
      conditionStatus: defaultValues?.conditionStatus || "GOOD",
      painScore: defaultValues?.painScore || 0,
      symptoms: defaultValues?.symptoms || [],
      supplements: defaultValues?.supplements || [],
      content: defaultValues?.content || "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
  } = form;

  console.log("건강일지 form error", errors);

  const conditionStatus = watch("conditionStatus");
  const selectedSymptoms = watch("symptoms") || [];
  const supplements = watch("supplements") || [];
  const painScore = watch("painScore");

  const toggleSymptom = (symptom: string) => {
    const exists = selectedSymptoms.includes(symptom);
    const newArray = exists
      ? selectedSymptoms.filter((item) => item !== symptom)
      : [...selectedSymptoms, symptom];
    setValue("symptoms", newArray, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h3 className="font-medium">오늘의 기분</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button
          type="button"
          variant="outline"
          className={cn(
            "group h-24 flex-col gap-2 border-gray-200 hover:border-[#7F82E8]",
            conditionStatus === "GOOD" && "border-1 border-[#615ED6]",
          )}
          onClick={() =>
            setValue("conditionStatus", "GOOD", { shouldValidate: true })
          }
        >
          <Smile
            size={30}
            className="transition-colors group-hover:text-green-500"
          />
          좋음
        </Button>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "group h-24 flex-col gap-2 border-gray-200 hover:border-[#7F82E8]",
            conditionStatus === "NORMAL" && "border-1 border-[#615ED6]",
          )}
          onClick={() =>
            setValue("conditionStatus", "NORMAL", { shouldValidate: true })
          }
        >
          <Meh
            size={30}
            className="transition-colors group-hover:text-yellow-500"
          />
          보통
        </Button>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "group h-24 flex-col gap-2 border-gray-200 hover:border-[#7F82E8]",
            conditionStatus === "BAD" && "border-1 border-[#615ED6]",
          )}
          onClick={() =>
            setValue("conditionStatus", "BAD", { shouldValidate: true })
          }
        >
          <Frown
            size={30}
            className="transition-colors group-hover:text-red-500"
          />
          나쁨
        </Button>
      </div>

      <div>
        <div className="mb-3 flex justify-between">
          <h3 className="font-medium">통증 정도</h3>
        </div>
        <p className="text-primary font-semibold">{painScore}/10</p>
      </div>

      <Controller
        control={control}
        name="painScore"
        render={({ field }) => (
          <Slider
            min={0}
            max={10}
            step={1}
            value={[field.value]}
            onValueChange={(value) => field.onChange(value[0])}
          />
        )}
      />

      <div className="text-muted-foreground mt-2 flex justify-between text-sm">
        <p>없음</p>
        <p>심함</p>
      </div>

      <div>
        <h3 className="mb-3 font-medium">증상 선택</h3>
        <div className="flex flex-wrap gap-2">
          {symptomOptions.map((symptom) => {
            const isSelected = selectedSymptoms.includes(symptom);
            return (
              <Button
                key={symptom}
                type="button"
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSymptom(symptom)}
                className={cn(
                  "rounded-lg",
                  isSelected
                    ? "border-[#615ED6] bg-[#615ED6] text-white hover:bg-[#615ED6]"
                    : "hover:border-[#7F82E8]",
                )}
              >
                {symptom}
              </Button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-medium">복용 약</h3>

        <Input
          placeholder="복용한 약을 입력하세요(쉼표로 구분)"
          value={supplements.join(", ")}
          onChange={(e) => {
            const rawValue = e.target.value;
            const parsedArray = rawValue
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s.length > 0);

            setValue("supplements", parsedArray, { shouldValidate: true });
          }}
        />
      </div>

      <div>
        <h3 className="mb-3 font-medium">메모</h3>
        <Textarea
          {...register("content")}
          placeholder="오늘 건강 상태를 기록해보세요."
        ></Textarea>

        {errors.content && (
          <p className="mt-2 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          취소
        </Button>
        <Button
          type="submit"
          className="bg-[#615ED6] text-white hover:bg-[#7F82E8]"
        >
          저장하기
        </Button>
      </div>
    </form>
  );
}
