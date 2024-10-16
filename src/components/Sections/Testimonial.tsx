import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function Testimonials() {
  return (
    <SectionWrapper>
      <SmallHeader>What Our Clients Say</SmallHeader>

      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto pl-3 border-l-4 border-gray-200 ">
            <p className="mx-auto text-base leading-relaxed text-gray-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
            <h2 className="mt-4 text-sm font-semibold tracking-widest text-primary">
              John Doe
            </h2>
          </div>
          <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto pl-3 border-l-4 border-gray-200">
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
            <h2 className="mt-4 text-sm font-semibold tracking-widest text-primary">
              John Doe
            </h2>
          </div>
        </div>
      </div>
      {/* <p className="text-red-800 ">again more social proof the better</p> */}
    </SectionWrapper>
  );
}
