import { Card } from "@/components/ui/card";
import { Medicines } from "@/types/medicine.type";
import { Badge, Pill } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MedicinePopularCardProps {
  medicine: Medicines;
}

export default function MedicinePopularCard({ medicine }: MedicinePopularCardProps) {
  const hasImage = typeof medicine.itemImage === "string" && medicine.itemImage.trim() !== "null";

  const displayMedicineName = medicine.medicineName.replace(
    /\s*\(수출명:.*?\)/g,
    "",
  );

  return (
    <Link href={`/medicines/${medicine.id}`} className="block">
      <Card className="w-full p-5 h-full">
        <div className="gap-4">
          <div className="relative w-full aspect-square overflow-hidden flex items-center justify-center bg-[#efeefa] font-bold hover:text-[#615ED6] mb-4">
            {hasImage ? (
              <Image
                className="object-contain p-4"
                fill
                src={medicine.itemImage!}
                alt={displayMedicineName}
              />
            ) : (
              <Pill className="w-16 h-16 text-[#a7a6e8]" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold">{displayMedicineName}</h3>
            <p className="mt-1 text-sm text-gray-500">{medicine.manufacturer}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
