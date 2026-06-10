/*
  메인페이지
  배너(HeroSection)가 있으며
  하드코딩된 게시글이 1개 보인다.
*/

import CommunityList from '@/components/domain/community/communityList';
import '../globals.css';
import HeroSection from '@/components/domain/home/heroSection';

export default function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <HeroSection />
      <div className='mx-auto max-w-7xl'>
        <CommunityList />
      </div>
    </div>
  );
}
