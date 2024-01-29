import HomeButton from "./homebutton";

export default  function home ()
{
    return (
      <div className="w-screen h-screen flex  place-items-center  justify-center">
        <div className="text-4xl w-1/3 h-1/2 flex  homecenter   text-white font-bold text-center"></div>
        <div className="grid space-y-2">
          <p className=" text-justify -ml-44 font-bold -mt-28 text-white text-6xl ">
            Code To Creation
            <br /> We Lead Innovation
          </p>
          <p className="text-white   justify-center w-96">
            Transforming Lines of Code into Innovative Solutions, Pioneering the
            Future.
          </p>
          <HomeButton title="Reach us Now "/>
        </div>
      </div>
    );
}