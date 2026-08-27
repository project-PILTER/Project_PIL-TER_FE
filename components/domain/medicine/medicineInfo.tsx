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
    <div className="w-full space-y-6">
      <Card className="w-full p-5">
        <div className="flex gap-2">
          <Check className="w-5 h-5 text-[#615ed6] mt-1" />
          <h2 className="text-xl font-bold">효능 및 효과</h2>
        </div>

        <ul className="space-y-2 pl-1">
          {parseToList(medicine.efficiency).length > 0 ? (
            parseToList(medicine.efficiency).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#615ed6]">•</span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">해당 약품에 대한 설명이 없습니다.</li>
          )}
        </ul>
      </Card>

      <Card className="w-full min-h-[11.25rem] p-5 mt-6">
        <div className="flex gap-2">
          <TimerIcon className="w-5 h-5 text-[#615ed6] mt-1" />
          <h2 className="text-xl font-bold">복용 방법</h2>
        </div>

        <ul className="space-y-2 pl-1">
          {parseToList(medicine.useMethodQesitm).length > 0 ? (
            parseToList(medicine.useMethodQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#615ed6]">•</span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">해당 약품에 대한 설명이 없습니다.</li>
          )}
        </ul>
      </Card>

      <Card className="w-full p-5 mt-6">
        <div className="flex gap-2">
          <Shield className="w-5 h-5 text-[#feb340] mt-1" />
          <h2 className="text-xl font-bold">복용 시 주의사항</h2>
        </div>

        <ul className="space-y-2 pl-1">
          {parseToList(medicine.atpnQesitm).length > 0 ? (
            parseToList(medicine.atpnQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#feb340]">•</span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">해당 약품에 대한 설명이 없습니다.</li>
          )}
        </ul>
      </Card>

      <Card className="w-full p-5 mt-6">
        <div className="flex gap-2">
          <AlertTriangle className="w-5 h-5 text-[#ea202a] mt-1" />
          <h2 className="text-xl font-bold">부작용 정보</h2>
        </div>

        <ul className="space-y-2 pl-1">
          {parseToList(medicine.atpnWarnQesitm).length > 0 ? (
            parseToList(medicine.atpnWarnQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#ea202a]">•</span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">해당 약품에 대한 설명이 없습니다.</li>
          )}
        </ul>
      </Card>

      <Card className="w-full p-5 mt-6">
        <div className="flex gap-2">
          <File className="w-5 h-5 text-[#615ed6] mt-1" />
          <h2 className="text-xl font-bold">보관방법</h2>
        </div>

        <ul className="space-y-2 pl-1">
          {parseToList(medicine.depositMethodQesitm).length > 0 ? (
            parseToList(medicine.depositMethodQesitm).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#615ed6]">•</span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">해당 약품에 대한 설명이 없습니다.</li>
          )}
        </ul>
      </Card>
    </div>
  );
}
