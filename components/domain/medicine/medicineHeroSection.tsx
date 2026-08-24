import SearchBar from "../home/searchBar";

export default function MedicineHeroSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-[#625ed7] to-[#7181e7] w-full h-100 text-white">
      <div className="flex flex-col gap-3">
        <h1 className="decoration-solid text-5xl text-center leading-tight">
          약 정보와 실제 복용 후기를 확인해보세요
        </h1>
        <h2 className="text-center color=[#cdccf2]">
          약의 효능, 복용 방법, 주의사항과 실제 사용자 후기를 확인할 수
          있습니다.
        </h2>
      </div>

      <SearchBar />
    </section>
  );
}
