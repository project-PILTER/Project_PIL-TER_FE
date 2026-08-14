export const dynamic = 'force-dynamic';

import MedicineHeader from "@/components/domain/medicine/medicineHeader";
import MedicineInfo from "@/components/domain/medicine/medicineInfo";
import { getMedicineDetail } from "@/services/medicine.client";

export default async function MedicineDetailPage({params}: {params: Promise<{id: number}>}) {
  const { id } = await params;

  const medicineDetail = await getMedicineDetail(id);

  console.log("약 상세정보: ", medicineDetail);
  return(
    <div>
      <MedicineHeader medicine={medicineDetail}/>
      <div className="mx-auto max-w-7xl flex items-center gap-2 my-4">
        <MedicineInfo medicine={medicineDetail} />
      </div>
    </div>
  )
}