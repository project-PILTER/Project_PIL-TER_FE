import { MedicineReviewRequest } from "@/types/medicine.type";
import { api } from "./axios";

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

// 약 후기 수정
export async function putMedicineReview(id: number, data: MedicineReviewRequest) {
  try {
    const res = await api.put(`/medicines/${id}/reviews`, data);

    return res.data;
  } catch (error) {
    console.error("약 후기 수정 실패", error);
    throw error;
  }
}

// 약 후기 삭제
export async function deleteMedicineReview(id: number) {
  try {
    const res = await api.delete(`/medicines/${id}/reviews`);

    return res.data;
  } catch (error) {
    console.error("약 후기 삭제 실패", error);
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