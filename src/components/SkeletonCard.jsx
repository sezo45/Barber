export function SkeletonCard() {
  return (
    <div className="card bg-base-200 shadow-sm overflow-hidden animate-pulse">
      <div className="skeleton h-52 w-full rounded-none bg-base-300" />
      <div className="card-body p-5 gap-3">
        <div className="skeleton h-5 w-3/4 rounded bg-base-300" />
        <div className="skeleton h-3 w-full rounded bg-base-300" />
        <div className="skeleton h-3 w-5/6 rounded bg-base-300" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
