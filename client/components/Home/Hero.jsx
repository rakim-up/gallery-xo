//Hero Banner pic stuff going here

import React from "react";
import { useNavigate } from "react-router-dom";

const Hero= () => {
  return(
    <section className="w-full h-[110vh] flex flex-col sm:flex-row sm:w-11/12  s:pt-6 sm:justify-center">
      <div className=" w-2/3 mr-5 sm:w-6/12 self-center text-center sm:text-left mt-10">
        {/*text side */}
        {/* <TypeAnimation
          cursor={true}
          sequence={['Ball?', 3500, 'Drinks?', 3500, 'Lunch?', 3500]}
          repeat={Infinity}
          className="text-5xl w-full font-extrabold sm:text-6xl text-[#00AEFF] bg-slate-100 " */}
        {/* /> */}
        <p className="text-5xl w-full font-extrabold sm:text-6xl text-center ">Gallery</p>
        <p className="mt-2 mb:4 sm:my-5 text-center">
          Welcome to the online showcase Pusi Urale's creations. 
        </p>
      </div>
      {/* text container of hero div ends */}
      {/* image section */}
      <div className="self-center">
        <img
          className=" w-full h-auto shadow-xl object-fill my-5 mx-auto block"
          src="/images/Urale-Family-Picture.jpeg"
          alt="Urale family. 1st and 3rd gen"
        />
      </div>
      {/* image section ends */}
    </section>
  )
}

export default Hero