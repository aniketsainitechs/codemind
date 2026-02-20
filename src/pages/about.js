import Button from "@/components/ui/Button";
import { ArrowRight} from 'lucide-react';

export default function about() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50  via-purple-50 to-slate-50 pb-20 mt-10">
        <div className=" text-5xl md:text-6xl  mb-3 pt-22 md:px-50 lg:px-25 xl:px-50  md:leading-15  px-7 text-center ">
          We Build with Intelligence. We Deliver with Integrity.
        </div>
        <div className="text-center  text-[20px] pt-3  px-6   text-foreground/70 leading-relaxed">
          At Augmented Resourcing, people and technology come together to create
          real business impact.
        </div>
      </div>

      {/* 2 */}

      <div>
        <div className="container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
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
                  className="lucide lucide-target h-6 w-6 text-blue-600"
                  aria-hidden="true"
                  data-fg-qvm15=":2034.865:/components/AboutMain.tsx:28:17:1186:44:e:Target::::::DxzD"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h2
                className="text-3xl"
                data-fg-qvm16=":2034.865:/components/AboutMain.tsx:30:15:1266:39:e:h2:t"
              >
                Our Story
              </h2>
            </div>

            {/* 3 */}
            <div className="bg-white border-1 border-gray-200 rounded-xl p-8 mb-6">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Founded in 2021, Augmented Resourcing was built on a simple idea
                — combine world-className talent with cutting-edge technology to
                help businesses move faster.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                What began as a focus on talent has grown into a full-service IT
                and AI solutions firm — powering enterprise applications and
                intelligent automation systems worldwide.
              </p>
            </div>
            <Button
              variant="primary"
              href="/solutions"
              icon={<ArrowRight className="h-5 w-4" />}
              className="  !text-black bg-white rounded-lg border border-gray-200 inline-flex !py-[8px]" >
            Read Our Full Story
            </Button>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-gray-900">Leadership</h2>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 ">
              <div className="grid md:grid-cols-3 gap-8 p-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-xl  from-blue-100 to-purple-100 overflow-hidden">
                    <img
                      className="w-full h-full object-cover "
                      src="./photo-about1.jfif"
                    ></img>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    Ganesh Dutt Tiwari
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over a decade of experience in IT delivery and resource
                    management, Ganesh leads every engagement with a focus on
                    reliability, agility, and long-term client success.
                  </p>

                    <Button
              variant="primary"
              href="/solutions"
              icon={<ArrowRight className="h-5 w-4" />}
              className="  !text-black bg-white rounded-lg border border-gray-200 inline-flex !py-[8px]" >
      Meet the Leadership
            </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 */}

      <div className="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-8 pt-20">
          <div></div>
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
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
              class="h-6 w-6 text-blue-600"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
          </div>

          <h2 class="text-3xl  text-gray-900">
            Why Augmented Resourcing
          </h2>
        </div>
        <div className=" bg-gradient-to-br from-blue-50 to-purple-50  rounded-xl p-7 md:mx-0  mx-4 mb-6 ">
          <p className="text-xl  text-gray-900 leading-relaxed mb-4">
            We are not a traditional outsourcing firm — we are a delivery
            orchestrator.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our model blends technology, AI, and curated experts to deliver
            value at unmatched speed.
          </p>
        </div>

         <Button
              variant="primary"
              href="/solutions"
              icon={<ArrowRight className="h-5 w-4" />}
              className="  !text-black bg-white rounded-lg border border-gray-200 inline-flex !py-[8px] mb-20" >
    Why Clients Choose Us
            </Button>
      </div>

      {/* 6 */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center container mx-auto px-4 lg:px-30">
          <div>
            <p className="text-5xl mb-2">500+ </p>
            <p className="text-blue-100 ">Projects Delivered</p>
          </div>
          <div>
            <p className="text-5xl mb-2">50+ </p>
            <p className="text-blue-100 ">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-5xl mb-2">95% </p>
            <p className="text-blue-100 ">Client Satisfaction</p>
          </div>
        </div>
      </div>
      {/* 7 */}

      <div>
        <div className="py-20 ">
          <div className="container mx-auto px-4 text-center max-w-3xl ">

            <h2 className="text-3xl  mb-4 px-2">Ready to Build Together?</h2>
            <p className=" text-xl text-foreground/70 mb-8 px-2">
              Let's explore how we can help accelerate your digital transformation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

               <Button
                                                 variant="primary"
                                                 href="/solutions"
                                                 icon={<ArrowRight className="h-5 w-4" />}
                                             >
                                                Contact Us
                                             </Button>
   <Button
                                    variant="secondary"
                                    href="/contact"
                               className="!py-[8px] px-6" >
                                   View Case Studies
                                </Button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
