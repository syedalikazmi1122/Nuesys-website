import Image from "next/image";
import Bilal from "./bilal.png";
import vector from "./vector.png";
import { url } from "inspector";
export default function lowerhomesection() {
  return (
    <>
      <div className="homelowersection">
        <div className="grid  justify-start  mt-10  ml-10  ">
          <h1
            className="text-white text-3xl"
            style={{ fontFamily: "Nourd-SemiBold" }}
          >
            Who are we?
          </h1>
          <p className="text-sm text-wrap w-3/4 opacity-80 text-white">
            Welcome to Nuesys, a powerhouse of three change enthusiaists on a
            mission to turn your ideas into digital brilliance. With a blend of
            creativity and expertise, we're here to craft solutions that exceed
            expectations. Meet the team that's passionate about coding and
            dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="flex space-x-20 h-40 mt-32 justify-center w-screen">
          <Image
            src={Bilal}
            className=" "
            alt="bilal"
            height={200}
            width={200}
          />
          <Image
            src={Bilal}
            className=" "
            alt="bilal"
            height={200}
            width={200}
          />
          <Image
            src={Bilal}
            className=" "
            alt="bilal"
            height={200}
            width={200}
          />
        </div>
        {/* The row */}
        <div className="flex mt-10 ml-10 space-x-10 mb-10">
          {/* the box */}
          <div className=" gradientlowerhomesectionblogbox relative w-96 h-56 bg-gradient-to-r from-transparent  rounded-lg ">
            <Image
              src={vector}
              alt="aa"
              height={50}
              className="ml-5 mt-6"
              width={50}
            />
            <div className="absolute top-8 left-8">
              <h1 className="text-white text-2xl font-bold border border-purple-900">
                About Future
              </h1>
              <p className="mt-4 p-2 text-white text-sm border border-purple-900">
                This is where we will add small description about what is the
                blog about or is talking about. I am adding this paragraph to
                demonstrate how this will look after adding the context and
                also, obviously, filling the space!
              </p>
            </div>
          </div>
          <div className=" gradientlowerhomesectionblogbox relative w-96 h-56 bg-gradient-to-r from-transparent  rounded-lg ">
            <Image
              src={vector}
              alt="aa"
              height={50}
              className="ml-5 mt-6"
              width={50}
            />
            <div className="absolute top-8 left-8">
              <h1 className="text-white text-2xl font-bold border border-purple-900">
                New on Nuesys
              </h1>
              <p className="mt-4 p-2 text-white text-sm border border-purple-900">
                This is where we will add small description about what is the
                blog about or is talking about. I am adding this paragraph to
                demonstrate how this will look after adding the context and
                also, obviously, filling the space!
              </p>
            </div>
          </div>
          <div className=" gradientlowerhomesectionblogbox relative w-96 h-56 bg-gradient-to-r from-transparent  rounded-lg ">
            <Image
              src={vector}
              alt="aa"
              height={50}
              className="ml-5 mt-6"
              width={50}
            />
            <div className="absolute top-8 left-8">
              <h1 className="text-white text-2xl font-bold border border-purple-900">
                Quote of the day
              </h1>
              <p className="mt-4 p-2 text-white text-sm border border-purple-900">
                This is where we will add small description about what is the
                blog about or is talking about. I am adding this paragraph to
                demonstrate how this will look after adding the context and
                also, obviously, filling the space!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
