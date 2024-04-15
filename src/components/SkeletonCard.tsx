import ContentLoader from "react-content-loader";

const SkeletonCard = () => {
  return (
    <div className="h-24 bg-white flex rounded-lg overflow-hidden">
      <ContentLoader uniqueKey="my-random-value1" speed={2} width={128} height={96} viewBox="0 0 128 96" backgroundColor="#e5e7eb" foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="0" ry="0" width="128" height="96" />
      </ContentLoader>
      <div className="flex flex-col justify-center px-4">
        <p className="text-md sm:text-base font-bold text-neutral-800 line-clamp-2 leading-relaxed">
          <ContentLoader uniqueKey="my-random-value2" speed={2} width={380} height={20} viewBox="0 0 380 20" backgroundColor="#f5f5f5" foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="4" ry="4" width="380" height="20" />
          </ContentLoader>
        </p>
        <p className="text-xs sm:text-sm mt-2.5 text-gray-400">
          <ContentLoader uniqueKey="my-random-value3" speed={2} width={160} height={14} viewBox="0 0 160 14" backgroundColor="#f5f5f5" foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="4" ry="4" width="160" height="14" />
          </ContentLoader>
        </p>
      </div>
    </div>
  );
};

export default SkeletonCard;
