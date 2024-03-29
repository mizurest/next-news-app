import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-6 text-sm sm:text-base">
      <label className="font-bold mb-1.5 text-xs text-gray-400" htmlFor="">
        メールアドレス
      </label>
      <input className="border-solid border border-gray-200 px-2 py-2 w-full rounded-md" placeholder="" type="email" name="email" id="" />
      <button className="mt-6 duration-200  w-full rounded-full bg-tahiti-500 hover:bg-tahiti-600 text-white font-bold py-3 px-6 rounded">ログイン</button>
    </main>
  );
}
