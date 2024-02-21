import { Paragraph } from "../Paragraph";
import { SmallHeader } from "../SmallHeader";

export function VideoSection() {
  return (
    <section className="pb-44 pt-6">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            {/* fade in image based on scroll */}
            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* <img
                alt="House"
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 object-cover"
              /> */}
              <img
                className="absolute h-100 -top-10 w-full "
                src="/undraw_Scrum_board_re_wk7v.svg"
                alt="undraw_Scrum_board_re_wk7v"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <SmallHeader>Meet Indie Tech</SmallHeader>

              <Paragraph>
                Indie Tech is the first automated consulting management system
                uniting consultants and clients. This innovative platform will
                manage contract deliverables and supplier risk while consultants
                and clients connect towards the same goals.
              </Paragraph>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-primary-main bg-primary-main px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-main focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
