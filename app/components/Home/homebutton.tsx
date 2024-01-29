import { homebuttonprops } from "@/app/types";

export default function HomeButton({ title, onClick }: homebuttonprops) {
  return (
    <>
      <div>
        <button className="w-48 h-10 reachusbuttonhomepage rounded-3xl text-xl text-white">
          {title}
        </button>
      </div>
    </>
  );
}
