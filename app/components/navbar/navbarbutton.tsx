import { navbarbuttonprops } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const Navbarbutton = ({
  title,
  imageaddress,
  SocialLink,
}: navbarbuttonprops) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={SocialLink}>
        <p className="transform transition-transform duration-500 hover:scale-110">
          <Image src={imageaddress} alt={title} width={30} height={30} />
        </p>
      </Link>
    </div>
  );
};

export default Navbarbutton;
