export default function Skeleton() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between animate-pulse">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-5 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
