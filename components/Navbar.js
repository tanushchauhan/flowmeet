import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 pl-4 pr-6 py-4 lg:pr-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo_FlowMeet.svg"
          width={250}
          height={105}
          alt="Flow Meet Logo"
          className="max-sm:hidden"
        ></Image>
        <Image
          src="/icons/logo.svg"
          width={92}
          height={25}
          alt="Flow Meet Logo"
          className="hidden max-sm:block"
        ></Image>
      </Link>
    </nav>
  );
}

export default Navbar;