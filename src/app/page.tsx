import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-20 w-full flex flex-col items-center justify-center bg-sky-300">
        <h1 className="text-xl font-bold text-white">今日のニュース</h1>
        <p className="text-xs text-white mt-1">2023年4月28日 金曜日</p>
      </header>

      <main className="flex gap-2 min-h-screen flex-col py-4 px-4 xl:px-96 text-sm sm:text-base bg-neutral-100">
        <div className="bg-white flex rounded-lg overflow-hidden hover:bg-gray-50 cursor-pointer">
          <Image src="/sample.png" width={132} height={132} alt="Picture of the author" />
          <div className="flex flex-col justify-center px-3">
            <p className="text-md sm:text-base font-bold text-neutral-800 line-clamp-2 leading-relaxed">
              衣替えはGWに終わらせよう。どうせなら毛玉も一気に解消衣替えはGWに終わらせよう。どうせなら毛玉も一気に解消
            </p>
            <p className="text-xs sm:text-sm mt-1 text-gray-400">GIZMODO JAPAN</p>
          </div>
        </div>

        <div className="bg-white flex rounded-lg overflow-hidden hover:bg-gray-50 cursor-pointer">
          <Image src="/sample.png" width={132} height={132} alt="Picture of the author" />
          <div className="flex flex-col justify-center px-3">
            <p className="text-md sm:text-base font-bold text-neutral-900">衣替えはGWに終わらせよう。どうせなら毛玉も一気に解消</p>
            <p className="text-xs sm:text-sm mt-1 text-gray-400">GIZMODO JAPAN</p>
          </div>
        </div>
      </main>
    </>
  );
}
