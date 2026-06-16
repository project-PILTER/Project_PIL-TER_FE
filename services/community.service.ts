/*
  커뮤니티 관련 api 함수들 모음
*/

import { Article } from "@/types/community.type";

export async function getArticles(): Promise<Article[]> {
  const articles = await fetch(`${process.env.TEST_API_URL}/articles`);

  return articles.json();
}

// export async function postArticles({article}:Article) {
//   const response = await api.post("/api/community/articles", {
//     id: article.id,

//   })
// }