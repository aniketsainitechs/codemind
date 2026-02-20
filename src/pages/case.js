import { ArrowRight, Funnel  } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from "next/link";
export default function Case() {
  return (
    <>
      <div className='max-w-7xl mx-auto '>
        <div className="flex grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 pt-20 pb-10 bg-purple-50 ">
          {/*first */}
          <div className="mt-15 md:ml-10 xl:ml-10 ml-5">
            {/*heading & paragraph */}
            <button className="flex gap-2 bg-blue-100 py-[8px] px-3 text-sm text-blue-700 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-4 w-4" aria-hidden="true" data-fg-bjd18=":2154.64:/components/CaseStudiesListing.tsx:51:17:2795:29:e:Award::::::B1kh"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              Proven Results Across Industries</button>
            <p className="xl:text-6xl md:text-6xl text-4xl  mt-[30px]">Delivering </p>
            <p className="xl:text-6xl md:text-6xl text-4xl ">Measurable Impact </p>
            <p className="xl:text-6xl md:text-6xl text-4xl ">for Every Client</p>
            <p className="text-lg py-[20px] text-gray-600">From enterprise applications to AI automation — explore how we've helped organizations accelerate delivery, reduce costs, and scale faster.</p>

            {/*buttons */}
            <div className="md:flex-row  items-start flex flex-col gap-3 md:gap-0 md:space-x-5">
              <Button
                variant="primary"
                className="mt-2 xl:text-sm text-xs py-[12px] px-4 font-semibold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Share Your Challenge
              </Button>

              <Button
                variant="secondary"
                className="mt-2 text-sm py-[10px] px-5"
              >
                View All Projects
              </Button>
            </div>
          </div>

          {/*second */}
          <div className="md:pt-20 xl:pt-20  pt-10  pb-20  px-[15px] xl:pr-[40px] md:px-8">

            {/*bg-image */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative  bg-cover bg-center bg-no-repeat aspect-[16/9] w-full "
              style={{
                backgroundImage: "url('/photo-1758691737138-7b9b1884b1db.jfif')",
              }}
            >  <div className=" absolute inset-0 bg-gradient-to-t from-blue-800/60 
    via-[#0C2B5A]/60 
    to-transparent"></div>
              <div className=' grid grid-cols-3 gap-10 absolute bottom-8 left-0 w-full text-white text-center'>
                <div>
                  <h className="text-3xl ">500+</h>
                  <p className='text-sm '> Projects</p>
                </div>
                <div>
                  <h className="text-3xl ">50+</h>
                  <p className='text-sm '> Clients</p>

                </div>
                <div>
                  <h className="text-3xl ">95%</h>
                  <p className='text-sm '> Satisfaction</p>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/*second div */}
        <div className=' sticky top-20  md:flex md:items-center md:justify-center md:space-x-5 grid grid-cols-2 gap-y-5 md:px-0 px-4 justify-items-center bg-white/40 z-40 backdrop-blur-3xl  py-8 border border-b-gray-200 border-t-0 border-x-0 font-semibold '>
<Button
                variant="secondary"
                className="mt-2 text-sm py-[6px] px-[10px]"
              >   <Funnel className='h-4 w-4' />
               All Projects
              </Button>          <button className='text-black hover:bg-gray-200 py-1 px-3 rounded-md  text-sm '>Product Development</button>
          <button className='text-black hover:bg-gray-200 py-1 px-3 rounded-md  text-sm'>AI & Automation</button>
          <button className='text-black hover:bg-gray-200 py-1 px-3 rounded-md  text-sm '>Talent Augmentation</button>

        </div>

        {/*third div */}

        <div className='grid grid-cols-1 md:grid-cols-3  px-5  pb-10 pt-20 gap-10 '>
          {/*1 */}
          <div className='group relative text-xl text-amber-200 rounded-xl shadow-md w-full max-w-[380px] h-[350px]  overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl '>
            <img className="w-full h-full  object-cover object-[50%_80%]  transition-transform duration-500 
               group-hover:scale-110 "src="./photo-1.jfif"></img>

            <Link href="/case1" className=' absolute top-4 left-4 px-3 py-1.5  bg-white rounded-2xl text-xs text-black '>AI & Automation</Link>

            <div className='absolute bottom-0 left-0 right-0 bg-gray-100 py-5 px-5'>
              <p className="text-sm text-gray-400">FinTech Client</p>

              <p className="text-[15px] text-black pt-2 hover:text-blue-700 ">AI-Driven Workflow Automation</p>

              <p className='text-[15px] text-gray-500 py-3 '>Reduced manual data entry by 60%</p>
              <Button
                variant="text"
                className="text-sm inline-flex  group gap-0"
                icon={<ArrowRight className="w-4 h-4 transition-all duration-300  group-hover:translate-x-1" />}
              >
                View Case Study
              </Button>            </div>
          </div>



          {/*2 */}
          <div className='group  relative text-xl text-amber-200 rounded-xl shadow-md w-full max-w-[380px] h-[350px]  overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 group-hover:shadow-xl'>
            <img className="w-full h-full object-cover object-[50%_80%]  transition-transform duration-500 
               group-hover:scale-110"src="./photo-2.jfif"></img>

            <Link href="/case2" className='absolute top-4 left-4 bg-white rounded-2xl px-3 py-1.5  text-xs text-black '>Product Development</Link>

            <div className='absolute bottom-0 left-0 right-0 bg-white py-5 px-5'>
              <p className="text-sm text-gray-400">HR SaaS Company</p>

              <p className="text-[15px] text-black pt-2 hover:text-blue-700">Cloud-Based HR Management Platform</p>

              <p className='text-[15px] text-gray-500 py-3'>Cut admin effort by 50%</p>
              <Button
                variant="text"
                className="text-sm inline-flex  group gap-0"
                icon={<ArrowRight className="w-4 h-4 transition-all duration-300  group-hover:translate-x-1" />}
              >
                View Case Study
              </Button>             </div>
          </div>


          {/*3 */}
          <div className=' group relative text-xl text-amber-200 rounded-xl shadow-md  w-full max-w-[380px] h-[350px] ] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl '>
            <img className="w-full h-full pb-30 transition-transform duration-500 
               group-hover:scale-110"src="./photo-3.jfif"></img>

            <Link href="/case3" className='absolute top-4 left-4 bg-white rounded-2xl px-3 py-1.5  text-xs text-black '>Product Development</Link>

            <div className='absolute bottom-0 left-0 right-0 bg-white py-5 px-5'>
              <p className="text-sm text-gray-400">Events Industry</p>

              <p className="text-[15px] text-black pt-2 hover:text-blue-700">Enterprise Event Management Platform</p>

              <p className='text-[15px] text-gray-500 py-3'>60% more efficient coordination</p>
              <Button
                variant="text"
                className="text-sm inline-flex  group gap-0"
                icon={<ArrowRight className="w-4 h-4 transition-all duration-300  group-hover:translate-x-1" />}
              >
                View Case Study
              </Button>             </div>
          </div>


          {/*4 */}
          <div className=' group relative text-xl text-amber-200 rounded-xl shadow-md w-full max-w-[380px] h-[350px]    overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            <img className="w-full h-full object-cover object-[50%_100%]  transition-transform duration-500 
               group-hover:scale-110 "src="./photo-4.jfif"></img>

            <Link href="/case4" className=' absolute top-4 left-4 py-1.5 px-3 bg-white rounded-2xl text-xs text-black '>Talent Augmentation</Link>

            <div className='absolute bottom-0 left-0 right-0 bg-white py-5 px-5'>
              <p className="text-sm text-gray-400">Financial Services Provider</p>

              <p className="text-[15px] text-black pt-2 hover:text-blue-700">Specialized Engineering Team</p>

              <p className='text-[15px] text-gray-500 py-3'>faster project delivery</p>
              <Button
                variant="text"
                className="text-sm inline-flex  group gap-0"
                icon={<ArrowRight className="w-4 h-4 transition-all duration-300  group-hover:translate-x-1" />}
              >
                View Case Study
              </Button>             </div>
          </div>

        </div>



        <div className='bg-blue-600 text-center xl:px-0 px-5 py-[80px]'>
          <p className='text-white text-4xl '>Ready to Create Your Success Story?</p>
          <p className='text-gray-200 md:text-xl tracking-wide'>Let's discuss how we can deliver measurable results for your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="light" href="/book-call">
              Book a Discovery Call
            </Button>

            <Button variant="ghost" href="/contact" className='bg-white'>
              Contact Us
            </Button>
          </div>
        </div>

      </div>


    </>
  )
}