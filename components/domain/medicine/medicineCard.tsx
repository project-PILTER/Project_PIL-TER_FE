import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Medicines } from "@/types/medicine.type";
import { Pill, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MedicineCardProps {
  medicine: Medicines;
}

export default function MedicineCard({ medicine }: MedicineCardProps) {
  const hasImage =
    typeof medicine.itemImage === "string" &&
    medicine.itemImage.trim() !== "null";

  const displayMedicineName = medicine.medicineName.replace(
    /\s*\(수출명:.*?\)/g,
    "",
  );

  return (
    <Link href={`/medicines/${medicine.id}`} className="block">
      <Card className="w-full p-5">
        <div className="flex gap-4">
          <div className="w-24 h-24 flex items-center justify-center bg-[#efeefa] font-bold hover:text-[#615ED6]">
            {hasImage ? (
              <Image
                className="w-full h-full object-contain"
                width={96}
                height={96}
                src={medicine.itemImage!}
                alt={medicine.medicineName}
              />
            ) : (
              <Pill className="w-10 h-10 text-[#a7a6e8]" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold">{displayMedicineName}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {medicine.manufacturer}
            </p>

            <div className="flex items-center gap-1 mt-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

              <span className="ml-1 text-sm font-bold">
                {medicine.averageRating === 0
                  ? "0"
                  : medicine.averageRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full hover:bg-[#615ed6] hover:text-white"
        >
          <span>상세보기</span>
        </Button>
      </Card>
    </Link>
  );
}
