"use client";

import { sidebar } from "@/utils/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebar.map((e) => {
          return (
            <Link
              href={e.route}
              key={e.text}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
                pathname === e.route ||
                (pathname.startsWith(e.route) && e.route !== "/")
                  ? "bg-blue-1"
                  : ""
              }`}
            >
              <Image src={e.imgUrl} alt={e.text} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{e.text}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
