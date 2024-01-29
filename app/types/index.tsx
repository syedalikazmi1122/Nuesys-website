import { StaticImageData } from "next/image";

// for props like home about etc
export interface navbarlistprops {
  title: string;
  link: string;
}
// for the gtihub icons used
export interface navbarbuttonprops {
  title:string;
  imageaddress:StaticImageData;
  SocialLink:string;
}