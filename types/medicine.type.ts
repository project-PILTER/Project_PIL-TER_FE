import { User } from "./auth.type";

export interface Medicines {
  id: number;
  atpnQesitm: string; // 주의사항
  atpnWarnQesitm: string; // 부작용
  depositMethodQesitm: string; // 보관방법
  efficiency: string; // 효과
  itemImage: string | null; // 약 이미지
  manufacturer: string; // 약 제조사
  medicineName: string; // 약 이름
  useMethodQesitm: string; // 복용방법
  isHot: boolean; // 인기 약 여부
  averageRating: number; // 평균 평점
  bookmarkCount: number; // 북마크 개수
  reviews: MedicineReview[];
  totalReviewCount: number; // 총 리뷰 개수
  likeCount: number;
}

export interface MedicineResponse<T> {
  content: T[];

  totalPages: number;
  totalElements: number;

  number: number;
  size: number;

  first: boolean;
  last: boolean;
  empty: boolean;

}

export interface MedicineReview {
  id: number;
  medicine: Medicines;
  nickname: string;
  profileImage: string;
  rating: number;
  effectType: "EFFECTIVE" | "INEFFECTIVE";
  symptomTag: "headache" | "toothache" | "fever" | "muscle_pain" | "menstrual_pain" | "other";
  content: string;
  likeCount: number;
  createdAt: string;
}

export interface MedicineReviewRequest {
  rating: number;
  effectType: string;
  symptomTag: string;
  content: string;
}