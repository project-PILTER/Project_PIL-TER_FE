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
  hot: boolean; // 인기 약 여부
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