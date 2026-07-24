// HTML 태그 제거하고 순수 텍스트만 반환하는 함수
export function stripHtml(html: string): string {
  if(!html) return "";
  return html.replace(/<[^>]*>?/g, "");
}