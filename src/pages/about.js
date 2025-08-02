import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Links } from "../../components/Link";
import Link from "next/link";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <Head>
        <title>リリエンワイス</title>
        <link rel="icon" href="img/icon.png"/>
      </Head>
      <header className="text-gray-700 border-b border-gray-200">
       <div className="container flex mx-auto p-1 flex-col md:flex-row items-center">
         <a href="#" className="font-extrabold text-red-500 mt-3 mb-2 md:mb-0 md:mt-2">
           <span className="text-4xl ml-3">リリエンワイス</span>
         </a>
         <div className="md:ml-auto text-sm lg:mr-3 ">
           <Link href="/" className="mr-4 hover:text-blue-400 duration-300">ホーム</Link>
           <Link href="/about" className="mr-4 hover:text-blue-400 duration-300">リリエンワイスについて</Link>
           <Link href="/music" className="mr-4 hover:text-blue-400 duration-300">過去の音源</Link>
           <Link href="/schedule" className="mr-4 hover:text-blue-400 duration-300">今後の予定</Link>
           <Link href="/contact" className="hover:text-blue-400 duration-300">連絡</Link>
         </div>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/img/icon.png" alt="logo" width={180} height={8} priority/>
        <h1 className="text-6xl">About Page</h1>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
