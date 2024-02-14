import { StaticImageData } from "next/image";

// for props like home about etc
export interface navbarlistprops {
  title: string;
  link: string;
}
// for the gtihub icons used
export interface navbarbuttonprops {
  title:string;
  imageaddress:string;
  SocialLink:string;
}
// for the reach us button on home page 
export interface homebuttonprops {
  title: string;
  onClick: () => void;
}