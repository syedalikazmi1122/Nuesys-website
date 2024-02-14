import Image from "next/image";
import NavLink from "./navbarlink";
import Navbarbutton from "./navbarbutton";
export default function Navbar() {
  return (
    <>
      <div className="flex content-between  w-screen items-center justify-center">
        <div className="flex items-center p-4  justify-center">
          {/* The icon of the site */}
          <Image
            alt="nyesyslogo"
            src={"/navbarpics/nuesyslogo.png"}
            width={100}
            height={100}
          />
          <div className=" ml-48 flex space-x-5">
            {/* the links for pages */}
            <NavLink title="Home" link="./home" />
            <NavLink title="Services" link="./home" />
            <NavLink title="Careers" link="./home" />
            <NavLink title="About us" link="./home" />
            <NavLink title="Blog" link="./home" />
          </div>
          {/* The social links  */}
          <div className="flex ml-48 items-center space-x-3">
            <Navbarbutton
              title="Github"
              imageaddress={"/navbarpics/GitHub.png"}
              SocialLink="aa"
            />
            <Navbarbutton
              title="instagram"
              imageaddress={"/navbarpics/Instagram.png"}
              SocialLink="aa"
            />
            <Navbarbutton
              title="facebook"
              imageaddress={"/navbarpics/Facebook.png"}
              SocialLink="aa"
            />
            <Navbarbutton
              title="linkedln"
              imageaddress={"/navbarpics/LinkedIn.png"}
              SocialLink="aa"
            />
          </div>
        </div>
      </div>
    </>
  );
}
