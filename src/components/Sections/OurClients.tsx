import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function OurClients() {
  return (
    <SectionWrapper grey noPadding>
      <div className="mx-auto lg:px-16">
        <p className="w-full text-center text-gray-500 font-semibold pb-6">
          Our Clients
        </p>
        <div className="mx-auto text-center">
          <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg"
                alt="Figma"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg"
                alt="Framer"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
                alt="Invision"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <p className="text-red-800 ">
        not sure if this is applicable but id recommend it the more social proof
        the better.
      </p> */}
    </SectionWrapper>
  );
}
