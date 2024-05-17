import Link from "next/link";
import { navbarLinks } from "@/utils";
import ClientButton from "./ClientButton";

const ShowNavIcons = () => {
  return (
    <div className="fixed top-12 left-0 w-full bg-slate-50 py-20 px-5 hidden max-md:flex flex-col items-center justify-center space-y-3 font-semibold text-lg text-center z-50">
      {navbarLinks.map(({ title, renderLoc }) => {
        return (
          <Link
            key={title}
            href={renderLoc}
            className=" w-full hover:bg-slate-200 rounded-md py-2"
          >
            {title}
          </Link>
        );
    })}
    <ClientButton title={"Book a Call"} />
    </div>
  );
};

export default ShowNavIcons;
