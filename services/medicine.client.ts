import { MedicineResponse, MedicineReviewRequest, Medicines } from "@/types/medicine.type";
import { api } from "./axios";

// 약 정보
export async function getMedicine(page: number): Promise<MedicineResponse<Medicines>> {
  try {
    const res = await api.get<MedicineResponse<Medicines>>(`/medicines?page=${page-1}&size=10`);

    return res.data;
  } catch (error) {
    console.error("약 정보 가져오기 실패", error);
    throw error;
  }
}

// 약 상세정보 가져오기
export async function getMedicineDetail(id: number): Promise<Medicines> {
  try {
    const res = await api.get<Medicines>(`/medicines/${id}`);

    return res.data;
  } catch (error) {
    console.error("약 상세정보 가져오기 실패", error);
    throw error;
  }
}

// 약 후기 작성
export async function postMedicineReview(id: number, userId: number, data: MedicineReviewRequest) {
  try {
    const res = await api.post(`/medicines/${id}/reviews?userId=${userId}`, data);

    return res.data;
  } catch (error) {
    console.error("약 후기 작성 실패", error);
    throw error;
  }
}

// 약 북마크
export async function postMedicineBookmark(id: number, userId: number) {
  try {
    const res = await api.post(`/medicines/${id}/bookmark?userId=${userId}`);

    return res.data;
  } catch (error) {
    console.error("약 북마크 실패", error);
    throw error;
  }
}

// 약 좋아요
export async function postMedicineLike(id: number) {
  try {
    const res = await api.post(`/medicines/${id}/hot`);

    return res.data;
  } catch (error) {
    console.error("약 좋아요 실패", error);
    throw error;
  }
}