"use client";

import Image from "next/image";

function Card({ img, head, des, clickFunc }) {
  return (
    <div
      className="bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
      onClick={clickFunc}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} width={27} height={27} alt="meeting" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{head}</h1>
        <p className="text-lg font-normal">{des}</p>
      </div>
    </div>
  );
}

export default Card;
