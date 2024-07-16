import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

function MobileNav() {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="mobile menu"
            className=" cursor-pointer sm:hidden"
          ></Image>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="order-none bg-dark-1"
        ></SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
