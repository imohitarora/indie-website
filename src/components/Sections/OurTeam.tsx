import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function OurTeam() {
  return (
    <SectionWrapper>
      <div className="p-8 grid lg:grid-cols-2 gap-10">
        <div className="">
          <SmallHeader>Meet The Team</SmallHeader>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr className="bg-grey-400 mb-4 mt-10" />
        </div>
        <div>
          <h2 className="text-2xl text-gray-400 pt-6 mb-4">Core Team</h2>

          {/* Founder & CEO */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            {/* <div className="md:w-1/3">
          <img
         src="sophia.jpg"
         alt="Sophia Stone"
         className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
       /> 
       </div> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">
                Sophia G. Contreras Stone
              </h3>
              <p className="text-primary-main font-bold">Founder, CEO</p>
              <p className="text-gray-700">
                Award-winning entrepreneur dedicated to transforming the
                consultancy marketplace.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            {/* <div className="md:w-1/3">
         <img
         src="mohit.jpg"
         alt="Mohit Arora"
         className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
       /> 
       </div> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">Mohit Arora</h3>
              <p className="text-primary-main font-bold">CTO</p>
              <p className="text-gray-700">
                Experienced Software Architect passionate about innovative
                solutions and leadership.
              </p>
            </div>
          </div>

          {/*  */}
          <h2 className="text-2xl text-gray-400 pt-6 mb-4">Advisory Team</h2>

          {/* Advisory Team */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            {/* <div className="md:w-1/3">
         <img
         src="juan.jpg"
         alt="Juan Pujadas"
         className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
       /> 
       </div> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">Juan Pujadas</h3>
              <p className="text-primary-main font-bold">
                Enterprise Risk and Professional Services Advisory
              </p>
              <p className="text-gray-700">
                Experienced board member and advisor in finance and technology.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            {/* <div className="md:w-1/3">
         <img
           src="neil.jpg"
           alt="Neil Bartlett"
           className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
         /> 
       </div> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">Neil Bartlett</h3>
              <p className="text-primary-main font-bold">
                Risk Data and Technology Advisory
              </p>
              <p className="text-gray-700">
                Veteran in the finance industry with a focus on data analytics
                and risk management.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            {/* <div className="md:w-1/3">
           <img
           src="eva.jpg"
           alt="Eva Cruz"
           className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
         /> 
         </div> */}
            <div className="">
              <h3 className="text-xl font-bold mb-2">
                Eva Cruz, PhD, MBA, FRM
              </h3>
              <p className="text-primary-main font-bold">
                Quantitative Risk Advisory
              </p>
              <p className="text-gray-700">
                Expert in quantitative techniques and risk management practices
                in banking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
