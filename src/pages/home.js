export default function home() {
  return (
    <>
      <div className="py-24">
        <div className="container mx-auto px-4 lg:px-8  mb-14">
          <div className=" mb-4 text-center text-4xl md:text-5xl mt-20">
            Our Core Solutions
          </div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-center">
            {" "}
            Three pillars of innovation designed to accelerate your digital
            transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4 lg:px-8">
          {/* 1 */}

          <div className="bg-card text-card-foreground p-8 flex flex-col gap-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 hover:border-primary/20 overflow-hidden">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center  group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-blocks h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path>
                <rect x="14" y="2" width="8" height="8" rx="1"></rect>
              </svg>
            </div>
            <h3 class="text-2xl ">
              Product &amp; Enterprise Application Development
            </h3>
            <h3 class="text-foreground/70  min-h-[4.5rem]">
              Build scalable, secure, and future-ready applications for
              enterprise and SaaS ecosystems.
            </h3>

            <a
              href=""
              className="inline-flex   gap-2 whitespace-nowrap rounded-[8px] text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-gray-200 hover:text-accent-foreground  p-2 w-29 group"
            >
              <span>Learn More</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </a>
          </div>
          {/* 2 */}

          <div className="bg-card text-card-foreground p-8 flex flex-col gap-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 hover:border-primary/20 overflow-hidden">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center  group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bot h-8 w-8 text-white"
                aria-hidden="true"
                data-fg-b3zs12=":2154.258:/components/CorePillars.tsx:54:21:2173:39:e:Icon"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <h3 class="text-2xl ">AI & Automation </h3>
            <h3 class="text-foreground/70  min-h-[4.5rem]">
              Empower your business with agentic AI, smart workflows, and
              data-driven process automation.
            </h3>

            <a
              href=""
              className="inline-flex  gap-2 whitespace-nowrap  text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground  p-2 w-25 hover:bg-gray-200 rounded-[9px] group"
            >
              <span>Discover</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </a>
          </div>
          {/* 3*/}

          <div className="bg-card text-card-foreground p-8 flex flex-col gap-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 hover:border-primary/20 overflow-hidden">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center  group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users h-8 w-8 text-white"
                aria-hidden="true"
                data-fg-b3zs12=":2154.258:/components/CorePillars.tsx:54:21:2173:39:e:Icon"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 class="text-2xl ">Talent Augmentation</h3>
            <h3 class="text-foreground/70  min-h-[4.5rem]">
              Extend your team instantly with vetted experts in software, AI,
              and enterprise systems.
            </h3>

            <a
              href=""
              className="inline-flex   gap-2 whitespace-nowrap  text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground  rounded-[9px] hover:bg-gray-200 p-2 w-29 group"
            >
              <span>Hire Talent</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto ">
          <div className="text-4xl md:text-5xl mb-6 text-center">
            {" "}
            Your Partner in Building the Future — Fast, Flexible, and Reliable
          </div>
          <p className="text-xl text-white/80 mb-8 text-center">
            We don't operate like a traditional outsourcing firm.
          </p>
          <p className="text-lg text-white/70 mb-12 text-center max-w-3xl mx-auto">
            We orchestrate a trusted network of experienced engineers, AI
            specialists, and delivery partners — guided by a leadership-driven
            model that guarantees consistency and speed.
          </p>
        </div>

        {/* 3 page  */}

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4  bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-award h-6 w-6 text-white"
                aria-hidden="true"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <div className="text-lg">Leadership-driven project delivery</div>
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4  bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield h-6 w-6 text-white"
                aria-hidden="true"
                data-fg-baum14=":1.2347:/components/WhyUs.tsx:48:23:1829:39:e:Icon"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <div className="text-lg">Vetted network of domain experts</div>
          </div>

          {/* 3 */}

          <div className="flex items-start gap-4  bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-zap h-6 w-6 text-white"
                aria-hidden="true"
                data-fg-baum14=":1.2347:/components/WhyUs.tsx:48:23:1829:39:e:Icon"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <div className="text-lg">Leadership-driven project delivery</div>
          </div>

          {/* 4 */}
          <div className="flex items-start gap-4  bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trending-up h-6 w-6 text-white"
                aria-hidden="true"
                data-fg-baum14=":1.2347:/components/WhyUs.tsx:48:23:1829:39:e:Icon"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
            </div>
            <div className="text-lg">Leadership-driven project delivery</div>
          </div>
        </div>

        <div class="text-center">
          <button
            className="inline-flex items-center justify-center gap-2  text-sm font-medium h-10 rounded-md  px-8 py-6 text-black hover:bg-slate-300 bg-white"
            data-slot="button"
          >
            Why Clients Choose Us
          </button>
        </div>
      </div>

      {/* AI and Technology That Transforms Industries */}

      <div className="py-24 bg-muted/30 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            AI and Technology That Transforms Industries
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Delivering measurable impact across sectors with tailored solutions
          </p>
        </div>

        {/* cards */}

     
      </div>
    </>
  );
}
