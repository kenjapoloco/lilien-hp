"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Links } from "../../components/Link";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});

export default function Home() {
  const settings = {dots: true,};
  return (

    <div className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <Head>
        <title>リリエンワイス</title>
        <link rel="icon" href="/img/icon.png"/>
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
        <Image className="dark:invert" src="/img/20.png" alt="logo" width={1920} height={800} priority/>
          <h1 className="text-6xl">Index Page</h1>
        <Links />
      </main>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-30 flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <p className="text-2xl font-bold text text-red-400">
              次回の定期演奏会
            </p>
            <h1 className="text-4xl font-extrabold text text-red-700 p-3">
              名古屋市電気文化会館
              <br />
              11月20日(木) 
            </h1>
            <button href="#" className="text-white font-bold bg-green-500 py-1.5 px-3 border-0 rounded text-lg hover:bg-green-400 duration-300">詳細はこちら</button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="/img/icon.ico" alt="something" width={800} height={1300} />
          </div>
        </div>
     </section>
     <Footer />
    </div>
  );
}

{/* <div className="image-slider-container">
<Slider {...settings}>
      <div>
        <img src="/img/20.png" alt="something" width={1150} height={930} />
      </div>
      <div>
        <img src="/img/20.png" alt="something" width={1150} height={930} />
      </div>
      <div>
        <img src="/img/20.png" alt="something" width={1150} height={930} />
      </div>
      <div>
        <img src="/img/20.png" alt="something" width={1150} height={930} />
      </div>
    </Slider>
    </div> */}
