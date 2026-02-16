
import { ArrowRight, Building2, Users, Calendar, Rocket , CodeXml} from 'lucide-react';
export default function Industries() {
    return (
        <>

            <div className="max-w-7xl mx-auto bg-background ">
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl lg:text-6xl mb-6">Driving Innovation Across Industries with Technology, Talent & AI</h1>
                            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">We empower businesses in finance, SaaS, HR, and events to scale faster through modern engineering, automation,
                                and expert talent — delivering measurable outcomes and long-term digital impact.</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="" className=" flex bg-black text-white text-sm font-medium py-[11px] px-4 rounded-lg cursor-pointer gap-4">Explore Our Solutions  <ArrowRight className='h-5 w-4' /></a>
                                <a href="" className="bg-white border border-gray-300 text-black text-sm font-medium py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200">Talk to Our Team</a>
                            </div>
                        </div>

                    </div>

                </section>


                <div className='lg:py-32 py-20'>
                    <div className='max-w-3xl pl-8  mb-16 '>
                        <h1 className='md:text-5xl lg:text-5xl text-3xl mb-4'>Our Technology at Work — Across Sectors</h1>
                        <p className='text-xl text-foreground/70'>We collaborate with forward-looking organizations across industries — combining domain expertise, AI-driven solutions, and agile development to solve real-world challenges.</p>
                    </div>
                    {/* card  */}
                    <div className='md:px-8 px-4  mb-8 '>
                        <div className='grid md:grid-cols-2  gap-8'>
                            <div className='border-2 border-gray-200 hover:border-blue-500/50 rounded-2xl hover:shadow-xl  overflow-hidden '>
                                <div className=' relative  transition-transform duration-500 hover:scale-110   '>
                                    {/* Image section */}

                                    <img src="hand.jpg" alt="" className='object-cover w-full h-48 ' />
                                    {/*  Gradient */}
                                    <div className="absolute inset-0 
                  bg-gradient-to-br from-blue-500 to-cyan-500 
                  opacity-60 mix-blend-multiply">
                                    </div>
                                    {/* Icon section */}
                                    <div className='absolute left-1/2  top-14 -translate-x-1/2  
                  text-blue-700 bg-white/90 p-4 rounded-2xl shadow-lg  '><Building2 className='h-12 w-12' /></div>
                                </div>
                                <div className='py-12 px-6'>
                                    <h1 className='text-2xl text-black'>Finance</h1>
                                    <h1 className='py-4 text-foreground/80'>Resource augmentation for banking and fintech projects.</h1>
                                    <p className='text-foreground/60'>Helping financial organizations access vetted technical experts for rapid scaling and compliance-driven delivery.</p>
                                </div></div>
                            <div className='border-2 border-gray-200 hover:border-blue-500/50 rounded-2xl hover:shadow-xl overflow-hidden '>
                                <div className=' relative  transition-transform duration-500 hover:scale-110   '>
                                    {/* Image section */}

                                    <img src="set.jpg" alt="" className='object-cover w-full h-48 ' />
                                    {/*  Gradient */}
                                    <div className="absolute inset-0 
                  bg-gradient-to-br from-purple-500 to-pink-500 
                  opacity-60 mix-blend-multiply">
                                    </div>
                                    {/* Icon section */}
                                    <div className='absolute left-1/2  top-14 -translate-x-1/2  
                  text-blue-700 bg-white/90 p-4 rounded-2xl shadow-lg  '><Users className='h-12 w-12' /> </div>
                                </div>
                                <div className='py-12 px-6'>
                                    <h1 className='text-2xl text-black'>HR & SaaS Platforms</h1>
                                    <h1 className='py-4 text-foreground/80'>Building next-gen SaaS applications for workforce and business management.</h1>
                                    <p className='text-foreground/60'>Example: End-to-end HR platform for workforce automation — from onboarding to analytics.</p>
                                </div></div>


                        </div>
                    </div>
                    <div className='md:px-8 px-4  mb-16 '>
                        <div className='grid md:grid-cols-2  gap-8'>
                            <div className='border-2 border-gray-200 hover:border-blue-500/50 rounded-2xl hover:shadow-xl  overflow-hidden '>
                                <div className=' relative  transition-transform duration-500 hover:scale-110   '>
                                    {/* Image section */}

                                    <img src="eventplanning.jpg" alt="" className='object-cover w-full h-48 ' />
                                    {/*  Gradient */}
                                    <div className="absolute inset-0 
                  bg-gradient-to-br from-orange-500 to-red-500 
                  opacity-60 mix-blend-multiply">
                                    </div>
                                    {/* Icon section */}
                                    <div className='absolute left-1/2  top-14 -translate-x-1/2  
                  text-blue-700 bg-white/90 p-4 rounded-2xl shadow-lg  '><Calendar className='h-12 w-12' /></div>
                                </div>
                                <div className='py-12 px-6'>
                                    <h1 className='text-2xl text-black'>Events & Marketplace Platforms</h1>
                                    <h1 className='py-4 text-foreground/80'>Developed a full-fledged enterprise solution for event management.</h1>
                                    <p className='text-foreground/60'>A digital marketplace enabling organizers to manage vendors, logistics, and live event operations seamlessly.</p>
                                </div></div>
                            <div className='border-2 border-gray-200 hover:border-blue-500/50 rounded-2xl  hover:shadow-xl overflow-hidden '>
                                <div className=' relative  transition-transform duration-500 hover:scale-110   '>
                                    {/* Image section */}

                                    <img src="l.jpg" alt="" className='object-cover w-full h-48 ' />
                                    {/*  Gradient */}
                                    <div className="absolute inset-0 
                  bg-gradient-to-br from-green-500 to-teal-500 
                  opacity-60 mix-blend-multiply">
                                    </div>
                                    {/* Icon section */}
                                    <div className='absolute left-1/2  top-14 -translate-x-1/2  
                  text-blue-700 bg-white/90 p-4 rounded-2xl shadow-lg  '><Rocket className='h-12 w-12' /> </div>
                                </div>
                                <div className='py-12 px-6'>
                                    <h1 className='text-2xl text-black'>Technology & Startups</h1>
                                    <h1 className='py-4 text-foreground/80'>Helping product companies and startups scale faster.</h1>
                                    <p className='text-foreground/60'>From MVPs to enterprise builds — delivering reliable product development and AI integration support.</p>
                                </div></div>


                        </div>
                    </div>

                </div>
                {/* Real Solutions heading */}
                <div className='py-12'>
                    <h1 className='text-center md:text-5xl  text-3xl font-medium  mx-6'>Real Solutions. Real Impact.</h1></div>

                {/* 3 cards */}
                <div className='grid md:grid-cols-3 gap-8  md:mx-8 mx-4'>

                    {/*  Finance */}
                    <div className=' border border-gray-200  overflow-hidden rounded-2xl hover:shadow-2xl flex flex-col gap-6'>
                        <div className='transition-transform  hover:scale-110 duration-500'>
                            <img src="h.jpg" alt="" className='object-cover w-full h-58' /></div>

                        <div className='p-6'>
                            <h1 className='text-blue-600 mb-2 text-sm'>Finance</h1>
                            <h1 className='text-xl mb-3'>Augmenting FinTech Teams with Expert Developers</h1>
                            <p className='text-foreground/70  pr-3 mb-3'>Supported a leading finance solutions provider with specialized software engineers and QA experts.</p>
                            <p className='text-foreground/60 pr-2'>Enabled faster project turnaround and seamless system modernization for end-clients.</p>
                            <a href="" className='hover:underline text-sm text-black font-medium flex gap-3 p-4  items-center  underline-offset-4 '>
                                <span className=''>Read More</span>  <span><ArrowRight className='h-5 w-4' /></span>
                            </a>
                        </div>
                    </div>
                    {/*  SaaS (HR Platform) */}
                    <div className=' border border-gray-200  overflow-hidden rounded-2xl hover:shadow-2xl flex flex-col gap-6'>
                        <div className='transition-transform  hover:scale-110 duration-500'>
                            <img src="saas.jpg" alt="" className='object-cover w-full h-58' /></div>

                        <div className='p-6'>
                            <h1 className='text-blue-600 mb-2 text-sm'>SaaS (HR Platform)</h1>
                            <h1 className='text-xl mb-3'>SaaS-Based HR Application for a Workforce Management Company</h1>
                            <p className='text-foreground/70  pr-3 mb-3'>
                                Designed and developed a scalable cloud-based HR platform to manage recruitment, payroll, and performance analytics.                    </p>
                            <p className='text-foreground/60 pr-2'>
                                Reducing manual admin effort by 50%.                    </p>
                            <a href="" className='hover:underline text-sm text-black font-medium flex gap-3 p-4  items-center  underline-offset-4 '>
                                <span className=''>Read More</span>  <span><ArrowRight className='h-5 w-4' /></span>
                            </a>
                        </div>
                    </div>
                    {/*  Events Marketplace Platform */}
                    <div className=' border border-gray-200  overflow-hidden rounded-2xl hover:shadow-2xl flex flex-col gap-6'>
                        <div className='transition-transform  hover:scale-110 duration-500'>
                            <img src="event.jpg" alt="" className='object-cover w-full h-58' /></div>

                        <div className='p-6'>
                            <h1 className='text-blue-600 mb-2 text-sm'>Events Marketplace Platform</h1>
                            <h1 className='text-xl mb-3'>
                                Enterprise Event Management Platform
                            </h1>
                            <p className='text-foreground/70  pr-3 mb-3'>
                                Built a comprehensive B2B event marketplace where users can plan, book, and manage every logistics component from one dashboard.                    </p>
                            <p className='text-foreground/60 pr-2'>
                                Integrated vendor management, budgeting, and live reporting — improving event coordination efficiency by 60%.                    </p>
                            <a href="" className='hover:underline text-sm text-black font-medium flex gap-3 p-4  items-center  underline-offset-4 '>
                                <span className=''>Read More</span>  <span><ArrowRight className='h-5 w-4' /></span>
                            </a>
                        </div>
                    </div>
                </div>
                  {/*  see all case button */}
          <div className='py-12  flex justify-center'>
            <a href="" className='px-4 py-2 rounded-md hover:bg-gray-300 font-medium border border-gray-300 text-center text-sm'>See All Case Studies</a>
          </div>
            {/*  Technology heading */}
          <div className='  mx-auto px-4 lg:px-8 mb-16  '>
            <h1 className='text-3xl md:text-5xl  mb-4'>Technology, AI, and Talent — The Pillars of Our Impact</h1>
                 {/*  1 col */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
<div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-8  hover:shadow-xl transition-all duration-300 border-2 border-gray-300 hover:border-blue-500/50'>
<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6"'>
     <CodeXml  className=' h-8 w-8 text-blue-600'/>
</div>
<h1 className='text-xl my-4'>Product & Enterprise Application Development</h1>
<p className='text-foreground/70 '> Scalable digital products and platforms designed to meet industry-specific needs — from HR SaaS systems to event ecosystems.</p>
</div>
                 {/*  2 col */}
<div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50'>
<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6"'>
     <CodeXml  className=' h-8 w-8 text-blue-600'/>
</div>
<h1 className='text-xl mb-4'>Product & Enterprise Application Development</h1>
<p className='text-foreground/70'> Scalable digital products and platforms designed to meet industry-specific needs — from HR SaaS systems to event ecosystems.</p>
</div>
                 {/*  3 col */}
<div className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50'>
<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6"'>
     <CodeXml  className=' h-8 w-8 text-blue-600'/>
</div>
<h1 className='text-xl mb-4'>Product & Enterprise Application Development</h1>
<p className='text-foreground/70'> Scalable digital products and platforms designed to meet industry-specific needs — from HR SaaS systems to event ecosystems.</p>
</div>
            </div>

          </div>
            </div>
        </>
    );

}