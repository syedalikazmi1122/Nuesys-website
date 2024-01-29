import { navbarlistprops } from "@/app/types";
import Link from "next/link";
 const NavbarList = ({title,link}:navbarlistprops) => {
    return (
      <div className="">
        <Link href={link}>
        <p
        className="nokora-regular opacity-90 text-sm  hover:text-gray-400 hover:-translate-x-1 hover: hover:cursor-pointer text-white">
         {title}
        </p> 
         </Link>
      </div>
    );
}
export default NavbarList;
