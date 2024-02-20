import { colors, theme } from "@/theme";
import { HeroPattern } from "../svgs/HeroPattern";
import { Button } from "../Button";

export function Hero() {
  return (
    <div className="relative bg-white max-w-[100vw] overflow-hidden">
      {/* SVG */}
      <HeroPattern
        className="absolute z-[0] top-[60px] left-[-20%] lg:left-[-10%]  scale-[0.6] 2xl:left-0 lg:scale-[0.7] xl:scale-[0.8] origin-[top_left]"
        color={colors.primary.main}
        flip
      />
      {/* -- */}
      <HeroPattern
        className="absolute z-[0] top-[30%] right-[-20%] lg:right-[-10%] scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:right-0 origin-[bottom_right]"
        color={colors.primary.main}
      />
      {/*  */}
      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
        {/* background fade/blur */}
        <div className="absolute bg-white rotate-[20deg] w-full h-[50%] blur-2xl" />
        {/*  */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-primary-main">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="relative text-center z-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            The future of consulting: redefined
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to the new era of consulting, brought to you by Indie Tech.
            Our platform is the culmination of diverse perspectives, engineered
            to optimize every aspect of the consulting process. By understanding
            and addressing the unique challenges faced by consultants and
            clients alike, we&apos;re reshaping the industry landscape. Embrace
            the future of consulting, redefined
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={"/contact"}>Contact Us</Button>
            <Button href={"/login"} accent>
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
      {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> 
      </div>*/}
    </div>
  );
}
