const Header = () => {
  const today = new Date();
  const dayname = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <header className="h-20 w-full flex flex-col items-center justify-center bg-sky-700">
      <h1 className="text-xl font-bold text-white">今日のニュース</h1>
      <p className="text-xs text-neutral-200 mt-1">
        {today.getFullYear()}年{today.getMonth() + 1}月{today.getDate()}日 {dayname[today.getDay()]}曜日
      </p>
    </header>
  );
};

export default Header;
