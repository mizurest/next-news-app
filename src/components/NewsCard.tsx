type Props = {
  title: string;
  source: string;
  image: string;
  url: string;
};

const NewsCard = (props: Props) => {
  return (
    <a href={props.url} target="_blank" className="h-24 bg-white flex rounded-lg overflow-hidden hover:bg-gray-50 cursor-pointer duration-200">
      <div className="w-32 h-24 bg-gray-200 shrink-0">
        <img src={props.image} className="w-full h-full object-cover" alt="ニュースのサムネイル" />
      </div>

      <div className="flex flex-col justify-center px-4">
        <p className="text-md sm:text-base font-bold text-neutral-800 line-clamp-2 leading-relaxed">{props.title}</p>
        <p className="text-xs sm:text-sm mt-1 text-gray-400">{props.source}</p>
      </div>
    </a>
  );
};

export default NewsCard;
