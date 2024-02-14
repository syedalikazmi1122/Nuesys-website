import HomeButton from "./homebutton";
import Lowersection from "./lowerhomesection";
export default function home() {
  return (
    <div className="w-screen h-full  space-y-20 homepage ">
      <div className="grid  mt-10  justify-center">
        <div className="mt-24 text-4xl w-1/3 h-1/2 flex  homecenter   text-white font-bold text-center"></div>
        <div className="grid  w-full    space-y-8 -mt-28 ">
          <p className=" text-justify  -ml-2 font-bold -mt-28   z-10 text-white text-6xl ">
            Code To Creation
            <br /> We Lead Innovation
          </p>
          <p className="text-white  ml-20  text-center z-10 w-96">
            Transforming Lines of Code into Innovative Solutions, Pioneering the
            Future.
          </p>
          <HomeButton title="Reach us Now " onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </div>
      {/* the about */}
      <Lowersection />
    </div>
  );
}
