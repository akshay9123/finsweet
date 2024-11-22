import React from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import Button from "../components/Button";
import building from "../assets/white-concrete-building-1838640.svg";
import Catagory from "../components/Catagory";
import technology from "../assets/business-and-trade 1.svg";
import business from "../assets/Icon-1.svg";
import startup from "../assets/Icon (2).svg";
import economy from "../assets/icon.svg";
import friends from "../assets/close-up-photography-of-man-wearing-sunglasses-1212984.svg";
import Authors from "../components/Authors";
import latacy from "../assets/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import miles from "../assets/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import jenny from "../assets/fashion-woman-cute-shoes-5704849.svg";
import russel from "../assets/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import first from "../assets/Logo 1.svg";
import sec from "../assets/Logo 2.svg";
import thir from "../assets/Logo 3.svg";
import fort from "../assets/Logo 4.svg";
import fift from "../assets/Logo 5.svg";
import jana from "../assets/Image.svg";
import Footer from "../components/Footer";
import JoinTeam from "../components/JoinTeam";




const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <Navbar />

        <div className="mx-4 sm:mx-8 md:mx-16 mt-16 md:mt-32 text-[#F4F4F4] text-base sm:text-lg md:text-xl font-medium">
          <h2 className="text-sm sm:text-base">POSTED ON STARTUP</h2>
          <h1 className="mt-4 sm:mt-6 md:mt-10 text-2xl sm:text-3xl md:text-7xl text-[#F4F4F4]         ">
            Step-by-step guide to choosing{" "}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-7xl text-[#F4F4F4]">
            great font pairs
          </h1>
          <h2 className="mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base">
            By <span className="text-[#FFD050]">Marish Gorge</span>{" "}
            <span className="ml-2 md:ml-4">Nov,23 2022</span>
          </h2>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            consequatur omnis{" "}
          </p>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            optio!
          </p>

          <div className="mt-6 sm:mt-8">
            <Button text="Read More" />
          </div>
        </div>
      </div>

      {/* featured and all post */}

      <div className=" mt-16 px-16 w-full justify-between">
        <div className="flex">
          <div className="w-2/4">
            <h1 className="text-[#232536] font-bold text-2xl">Featured Post</h1>

            <div className="mt-6 p-6 border border-black ">
              <div>
                <img src={building} alt="" />
              </div>
              <div>
                <p className="mt-4">
                  Lorem, ipsum. <span>May 22,2022</span>
                </p>
                <h1 className="mt-2 text-[#232536] font-semibold text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium animi natus eligendi?Lorem ipsum dolor sit amet.
                </h1>
                <div className="mt-4">
                  <Button text="Read More" />
                </div>
              </div>
            </div>
          </div>

          <div className=" gap-4">
            <h1 className="text-[#232536] font-bold text-2xl w-full">
              All Posts
            </h1>
            <div className="mt-8 p-6 font-semibold text-xl text-wrap hover:bg-[#FBF6EA] cursor-pointer hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer ">
              <p>8 figma design system that you can download for free today</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className=" p-6 font-semibold text-xl text-wrap hover:bg-[#FBF6EA] cursor-pointer hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer">
              <p>8 figma design system that you can download for free today</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="p-6 font-semibold text-xl text-wrap hover:bg-[#FBF6EA] cursor-pointer hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer">
              <p>8 figma design system that you can download for free today</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className=" p-6 font-semibold text-xl text-wrap hover:bg-[#FBF6EA] cursor-pointer hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer">
              <p>8 figma design system that you can download for free today</p>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
        </div>

        {/* 3rd box */}
        <div className=" mt-16 flex bg-[#F4F4F4] p-8 w-full justify-between gap-8">
          <div className="">
            <p className="text-[#232536] font-semibold text-xl">About Us</p>

            <p className="mt-2 text-[#232536] font-bold text-2xl">
              We are a community of
              <br />
              content writers who share their <br /> learnings
            </p>

            <p className="mt-2 text-[#232536] font-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quos atque hic dolore optio voluptas explicabo quasi
              magnam officiis. Accusamus corrupti, rem ea ab earum culpa at iure
              pariatur unde!
            </p>
          </div>
          <div>
            <p className="text-[#232536] font-medium text-xl">Our Missions</p>

            <p className="mt-2 text-[#232536] font-bold text-2xl">
              Creating valuable content for <br /> creatives all around the
              worlds
            </p>

            <p className="mt-2 text-[#232536] font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quos atque hic dolore optio voluptas explicabo quasi
              magnam officiis. Accusamus corrupti, rem ea ab earum culpa at iure
              pariatur unde!
            </p>
          </div>
        </div>

        {/* 4th  */}

        <div className="mt-16 ">
          <div className="text-center font-bold text-2xl">
            Choose a Catagory
          </div>
          <div className="flex justify-center gap-3 mt-6">
            <Catagory logo={business} text="Business" />
            <Catagory logo={startup} text="Startup" />

            <Catagory logo={economy} text="Economy" />
            <Catagory logo={technology} text="Technology" />
          </div>
        </div>

        {/* 5th  */}
        <div class="relative flex items-center  mt-16">
          <div class="w-1/2 h-full">
            <img src={friends} className="w-full h-full object-cover" />
          </div>

          <div class="absolute left-1/2 transform -translate-x-1/2 bg-white p-8 shadow-lg max-w-md ">
            <h5 class="text-sm  ">Why We Started</h5>
            <h2 class="mt-2 text-3xl font-bold">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p class="mt-4 text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button class="mt-6 px-6 py-3 bg-[#FFD050] text-[#232536] font-semibold rounded hover:bg-[#FFD050]">
              Discover our story &gt;
            </button>
          </div>
        </div>

        {/* 6th authors */}

        <div className="mt-16">
          <div className="text-center font-bold text-2xl">
            Choose a Catagory
          </div>
          <div className="flex justify-between gap-3 mt-6 gap-16">
            <Authors logo={miles} name="Floyd Miles" />
            <Authors logo={russel} name="Dianne Rusell" />
            <Authors logo={jenny} name="Jenny Wilson" />
            <Authors logo={latacy} name="Lestie Alexander" />1
          </div>
        </div>

        {/* 7th */}

        <div className="flex justify-between mt-16">
          <div>
            <p>We are </p>
            <p>Featured in</p>
          </div>
          <img
            src={first}
            alt=""
            className="hover:bg-[#FFD050]  cursor-pointer"
          />
          <img src={sec} alt="" className="hover:bg-[#FFD050] cursor-pointer" />
          <img
            src={thir}
            alt=""
            className="hover:bg-[#FFD050] cursor-pointer"
          />
          <img
            src={fort}
            alt=""
            className="hover:bg-[#FFD050] cursor-pointer"
          />
          <img
            src={fift}
            alt=""
            className="hover:bg-[#FFD050] cursor-pointer"
          />
        </div>

        {/* 8th  */}

        <div className="p-16 bg-[#FBF6EA] flex mt-16 justify-between">
          <div>
            <p className="text-xl font-semibold">Testimonial</p>
            <p className="font-bold text-3xl mt-2">
              What people say <br />
              about our blog
            </p>
            <p className="text-xl font-medium mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              esse praesentium porro aperiam omnis deleniti quae assumenda,
              repudiandae aut recusandae nesciunt dicta, sit commodi illum.
            </p>
          </div>
          <div className="h-64 border-2 border-gray-500 m-8"></div>

          <div>
            <p className="text-xl font-medium mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              facere harum dolor vel distinctio nemo, explicabo animi vitae a
              eveniet, dolorum, adipisci in quo delectus at doloremque tempore
              repudiandae ratione.
            </p>

            <div className="mt-24 flex gap-4 items-center">
              <img src={jana} alt="" />
              <div>
                <p>Janathan Vailem</p>
                <p className="text-xs">NEW YORK, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* 9th  */}

        <JoinTeam />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
