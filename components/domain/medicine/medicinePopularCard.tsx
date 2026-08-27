import { Card } from "@/components/ui/card";
import { Medicines } from "@/types/medicine.type";
import { Badge, Pill, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MedicinePopularCardProps {
  medicine: Medicines;
}

export default function MedicinePopularCard({
  medicine,
}: MedicinePopularCardProps) {
  const hasImage =
    typeof medicine.itemImage === "string" &&
    medicine.itemImage.trim() !== "null";

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
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                src={medicine.itemImage!}
                alt={displayMedicineName}
              />
            ) : (
              <Pill className="w-16 h-16 text-[#a7a6e8]" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{displayMedicineName}</h3>
            <p className="mt-1 text-sm text-gray-500 truncate">
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
      </Card>
    </Link>
  );
}
