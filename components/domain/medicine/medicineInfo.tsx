import { Card } from "@/components/ui/card";
import { Medicines } from "@/types/medicine.type";
import { AlertTriangle, Check, File, Shield, TimerIcon } from "lucide-react";

interface MedicineInfoProps {
  medicine: Medicines;
}

export default function MedicineInfo({ medicine }: MedicineInfoProps) {
  const parseToList = (text: string) => {
    if (!text) return [];
    return text
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full p-5">
        <div className="flex gap-2">
          <Check className="w-5 h-5 text-[#615ed6]" />
          <h2 className="text-lg font-bold">효능 및 효과</h2>
        </div>
        <ul className="space-y-2 pl-1">
          {parseToList(medicine.efficiency).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#615ed6]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="w-full p-5 mt-6">
        <div className="flex gap-2">
          <TimerIcon className="w-5 h-5 text-[#615ed6]" />
          <h2 className="text-lg font-bold">복용 방법</h2>
        </div>
        <ul className="space-y-2 pl-1">
          {parseToList(medicine.useMethodQesitm).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#615ed6]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {medicine.atpnQesitm !== null && (
        <Card className="w-full p-5 mt-6">
          <div className="flex gap-2">
            <Shield className="w-5 h-5 text-[#feb340]" />
            <h2 className="text-lg font-bold">복용 시 주의사항</h2>
          </div>
          <ul className="space-y-2 pl-1">
            {parseToList(medicine.atpnQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#feb340]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {medicine.atpnWarnQesitm !== "null" && (
        <Card className="w-full p-5 mt-6">
          <div className="flex gap-2">
            <AlertTriangle className="w-5 h-5 text-[#ea202a]" />
            <h2 className="text-lg font-bold">부작용 정보</h2>
          </div>
          <ul className="space-y-2 pl-1">
            {parseToList(medicine.atpnWarnQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#ea202a]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {medicine.depositMethodQesitm !== "null" && (
        <Card className="w-full p-5 mt-6">
          <div className="flex gap-2">
            <File className="w-5 h-5 text-[#615ed6]" />
            <h2 className="text-lg font-bold">보관방법</h2>
          </div>
          <ul className="space-y-2 pl-1">
            {parseToList(medicine.depositMethodQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#615ed6]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
