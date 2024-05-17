import Link from "next/link";
import { navbarLinks } from "@/utils";

import ClientButton from "./ClientButton";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  return (
    <header className="py-2 px-4">
      <nav className="flex justify-between items-center text-sm">
        <Link href={"/"} className="text-xl font-semibold">
          Pixel Perfect Studios
        </Link>
        <div className="flex lg:gap-10 gap-5 max-md:hidden font-extrathin text-[#656e81]">
          {navbarLinks.map(({ title, renderLoc }) => {
            return <Link key={title} href={renderLoc}>{title}</Link>;
          })}
        </div>
        <div className="max-md:hidden">
        <ClientButton title={"Book a Call"} />
        </div>
        <HamburgerIcon />
      </nav>
    </header>
  );
};

export default Navbar;
