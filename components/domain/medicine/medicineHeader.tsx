import { Card } from "@/components/ui/card";
import { Medicines } from "@/types/medicine.type";
import { Pill } from "lucide-react";
import Image from "next/image";

interface MedicineHeaderProps {
  medicine: Medicines;
}

export default function MedicineHeader({ medicine }: MedicineHeaderProps) {
  const hasImage =
    typeof medicine.itemImage === "string" &&
    medicine.itemImage.trim() !== "null";

  const displayMedicineName = medicine.medicineName.replace(
    /\s*\(수출명:.*?\)/g,
    "",
  );

  return (
      <Card className="w-full p-5">
        <div className="flex gap-4">
          <div className="w-48 h-48 flex items-center justify-center bg-[#efeefa] font-bold hover:text-[#615ED6]">
            {hasImage ? (
              <Image
                className="w-full h-full object-contain"
                width={192}
                height={192}
                src={medicine.itemImage!}
                alt={medicine.medicineName}
              />
            ) : (
              <Pill className="w-10 h-10 text-[#a7a6e8]" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-4xl font-semibold">{displayMedicineName}</h3>
            <p className="mt-1 text-md text-gray-500 mt-2">
              {medicine.manufacturer}
            </p>
            <h3 className="mt-2 text-lg">{medicine.efficiency}</h3>
          </div>
        </div>
      </Card>
  );
}
