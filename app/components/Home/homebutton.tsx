import { homebuttonprops } from "@/app/types";

export default function HomeButton({ title, onClick }: homebuttonprops) {
  return (
    <>
      <div>
        <button className="w-48 ml-32 z-10 h-10 reachusbuttonhomepage rounded-3xl text-xl text-white hover:">
          <p className="z-10">{title}</p>
        </button>
      </div>
    </>
  );
}
// "
