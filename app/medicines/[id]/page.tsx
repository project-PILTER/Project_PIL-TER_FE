export const dynamic = "force-dynamic";

import MedicineHeader from "@/components/domain/medicine/medicineHeader";
import MedicineInfo from "@/components/domain/medicine/medicineInfo";
import MedicineReviews from "@/components/domain/medicine/review/medicineReviews";
import { getMedicineDetail } from "@/services/medicine.server";

export default async function MedicineDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const medicineDetail = await getMedicineDetail(id);

  console.log("약 상세정보: ", medicineDetail);
  return (
    <div>
      <MedicineHeader medicine={medicineDetail} />
      <div className="mx-auto max-w-7xl flex items-center gap-2 mt-4">
        <MedicineInfo medicine={medicineDetail} />
      </div>

      <div className="mx-auto max-w-7xl flex items-center gap-2">
        <MedicineReviews medicine={medicineDetail} />
      </div>
    </div>
  );
}
