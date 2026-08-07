export const dynamic = 'force-dynamic';

import { articles } from '@/components/domain/community/examples/articleExamples';
/*
  메인페이지
  배너(HeroSection)가 있으며
  하드코딩된 게시글이 보인다.
*/

import '../globals.css';
import ArticleCard from '@/components/domain/community/article/articleCard';
import HeroSection from '@/components/domain/home/heroSection';
import { getArticles } from '@/services/community.server';
import { TrendingUp } from 'lucide-react';

export default async function Home() {
  const articles = await getArticles(1);

  if(!articles) {
    return null;
  }
  
  const hotArticles = articles.content.filter((article) => article.isHot);

  return (
    <div>
      <HeroSection />
      <div className='mx-auto max-w-7xl flex items-center gap-2 my-4'>
        <TrendingUp />
        <h2 className='text-xl font-bold text-foreground'>인기 게시글</h2>
      </div>
      <div className='mx-auto max-w-7xl mt-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {hotArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
