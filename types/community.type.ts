/*
  게시글에 관한 타입
*/

export interface Article {
  id: number; // 게시글 id
  title: string; // 게시글 제목 
  content: string; // 게시글 내용

  category: {
    id: number; // 카테고리 id
    name: string; // 카테고리 이름 ex) 두통, 등
  }

  author: {
    id: string; // 게시글 작성자 id
    nickname: string; // 게시글 작성자 닉네임
    profileImage: string; // 게시글 작성자 프로필 이미지 URL
  };

  viewCount: number; // 조회수
  likeCount: number; // 좋아요 수
  commentCount: number; // 댓글 수
  isHot: boolean; // HOT한 게시물인가
  createdAt: string; // 생성일
  updatedAt: string; // 수정일
}

export interface CommunityListProps {
  article: Article;
}