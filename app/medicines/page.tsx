export const dynamic = "force-dynamic";

import CommonPagination from "@/components/common/pagination";
import MedicineCard from "@/components/domain/medicine/medicineCard";
import MedicinePopularCard from "@/components/domain/medicine/medicinePopularCard";
import { getMedicine } from "@/services/medicine.client";
import { Pill, TrendingUp } from "lucide-react";

export default async function MedicinePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);

  const medicines = await getMedicine(page);

  const currentMedicine = medicines.content;

  const totalPages = medicines.totalPages;
  console.log("medicines 정보: ", medicines);
  return (
    <div className="w-full max-w-7xl mx-auto mt-2">
      <div className="flex gap-2 mb-3">
        <TrendingUp className="text-[#615ed6]" />
        <h2 className="text-xl font-bold text-foreground">인기 약품</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {currentMedicine.map((medicine) => (
          <MedicinePopularCard key={medicine.id} medicine={medicine} />
        ))}
      </div>

      <div className="flex gap-2 my-3">
        <Pill className="text-[#615ed6]" />
        <h2 className="text-xl font-bold text-foreground">전체 약품</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentMedicine.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
      
      <div className="mt-8">
        <CommonPagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/medicines"
        />
      </div>
    </div>
  );
}
