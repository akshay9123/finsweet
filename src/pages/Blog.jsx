import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import menOnChair from "../assets/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg";
import Posts from "../components/Posts";
import img1 from "../assets/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import img2 from "../assets/photo-of-people-doing-handshakes-3183197.svg";
import img3 from "../assets/photo-of-woman-looking-at-man-3183173.svg";
import img4 from "../assets/photo-of-people-walking-on-hallway-3182811.svg";
import Catagory from "../components/Catagory";
import technology from "../assets/business-and-trade 1.svg";
import business from "../assets/Icon-1.svg";
import startup from "../assets/Icon (2).svg";
import economy from "../assets/icon.svg";
import JoinTeam from "../components/JoinTeam";
import Footer from "../components/Footer";
import { Routes, Route, Link } from 'react-router-dom';


const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F4F0F8]">
        <div className="flex mx-16 py-16 bg-[#F4F0F8] justify-between">
          <div>
            <p>FEATURED POST</p>
            <p className="mt-4 font-bold text-4xl">
              {" "}
              Step-by-step guide to choosing great
            </p>
            <p className="text-4xl font-bold">font pairs</p>
            <p className="mt-6 font-semibold">
              By <span className="text-[#592EA9] font-semibold">John Deo</span>{" "}
              May 23, 2022
            </p>

            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ducimus maxime beatae laboriosam saepe <br />
              placeat delectus qui cum! Sed exercitationem atque perferendis
              nulla.
            </p>

            <div className="mt-10">
              <Button text="Read More" />
            </div>
          </div>
          <div>
            <img src={menOnChair} alt="" />
          </div>
        </div>
      </div>

      {/* post */}

      <div className="mx-16 mt-8 p-2">
        <p className="text-4xl font-bold">All post</p>

        <Posts
          img={img1}
          cmp="START UP"
          dtl="Design tips for designers that cover"
          dtl1="everything you need"
        />

        <Posts
          img={img2}
          cmp="BUSINESS"
          dtl="How to build rapport with your web"
          dtl1="design client"
        />

        <Posts
          img={img3}
          cmp="START UP"
          dtl="Logo design trends to avoid in 2022"
          dtl1=""
        />

        <Posts
          img={img4}
          cmp="TECHNOLOGY"
          dtl="8 Figma design system you can"
          dtl1="download for free today"
        />

        <Posts
          img={img1}
          cmp="ECONOMY"
          dtl="Font sizes in UI design: The complete"
          dtl1="guide to follow"
        />

        <div className="flex justify-center items-center h-28 gap-4 text-xl">
          <p className="text-[#6D6E76]">{"<"} Prev</p>
          <p className="text-[#232536] font-bold">Next {">"}</p>
        </div>



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


        <div className="mt-16">
            <JoinTeam />
        </div>


      </div>

       <div className="mt-16">
            <Footer />
       </div>
      
    </div>
  );
};

export default Blog;
