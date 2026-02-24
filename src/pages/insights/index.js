"use client";
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useState } from 'react';
export default function Insights() {
    const [activeTab, setActiveTab] = useState("all");
    return (
        <>
            <section className=" bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50 pt-32 pb-20" >
                <div className="max-w-4xl mx-auto  text-center">
                    <h1 className="text-5xl md:text-6xl mb-6 ">Stay Ahead with Insights that Matter</h1>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                        Explore the latest perspectives on AI, automation, and enterprise technology.</p>
                </div>
            </section>
            <section className=" max-w-6xl mx-auto py-20 pb-16">
                {/* 3 button */}
                <div className="flex items-center justify-between bg-gray-200 rounded-xl p-1 md:mx-0 mx-2">

                    <button
                        onClick={() => setActiveTab("all")}
                        className={`flex-1 py-1 px-2 rounded-xl text-sm font-medium 
    ${activeTab === "all" ? "bg-white shadow-sm" : ""}`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`flex-1 py-1 rounded-xl text-sm font-medium 
    ${activeTab === "blogs" ? "bg-white shadow-sm" : ""}`}
                    >
                        Blogs & Thought Leadership
                    </button>

                    <button
                        onClick={() => setActiveTab("news")}
                        className={`flex-1 py-1 rounded-xl text-sm font-medium 
    ${activeTab === "news" ? "bg-white shadow-sm" : ""}`}
                    >
                        News & Events
                    </button>

                </div>
            </section>
            {/* all section */}
            {(activeTab === "all") && (
                <>
                    <section className="max-w-6xl mx-auto px-4 lg:px-0 ">
                        <h1 className="text-3xl mb-8">Latest Articles</h1>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>

                            {/*  AI & Automation*/}

                            <div className=' group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100 '>
                                        <img src="ai.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>AI & Automation</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />March 15, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />5 min read</span>
                                    </div>
                                    <h1 className='hover:text-blue-600 mb-2 '>Building Faster with Agentic AI</h1>
                                    <p className='text-foreground/60 '>Discover how autonomous AI agents are revolutionizing software development workflows and accelerating time-to-market.                            </p>
                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>

                                </div>
                            </div>
                            {/*  Product Development */}
                            <div className='group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100  group'>
                                        <img src="q.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>Product Development</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />March 8, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />7 min read</span>
                                    </div>
                                    <div className='pr-3 md:pr-0'>
                                        <h1 className='hover:text-blue-600 mb-2  '>How AI Accelerates Product Delivery Pipelines</h1>
                                        <p className='text-foreground/60 '> Explore practical applications of AI in CI/CD, testing automation, and deployment optimization for modern development teams.                          </p>
                                    </div>
                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>

                                </div>
                            </div>
                            {/* Talent & Strategy */}
                            <div className='group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100 group'>
                                        <img src="s.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>Talent & Strategy</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />February 28, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />6 min read</span>
                                    </div>
                                    <h1 className='hover:text-blue-600 mb-2 '>Talent + Technology: The New Hybrid Model</h1>
                                    <p className='text-foreground/60 pr-2 md:pr-0 '>Why the future of IT services lies in combining human expertise with intelligent automation for superior outcomes.                     </p>

                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Recent News */}
                    <section className='max-w-6xl md:mx-auto mx-4 pt-12 pb-20 '>
                        <h1 className='text-3xl mb-8'>Recent News</h1>
                        <div className='space-y-4'>
                            {/* August 2025 */}
                            <div className='flex  items-start gap-6 bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className=' md:flex-none flex-1 px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>August 2025</div>
                                <div className='flex-2'>
                                    <h1 className='text-xl mb-2 font-medium'>
                                        Augmented Resourcing Launches AI Workflow Suite</h1>
                                    <p className='text-foreground/70'>New suite of agentic AI tools designed to help businesses automate complex workflows with minimal configuration.</p>
                                </div>
                                {/* October 2025 */}
                            </div >
                            <div className='flex  items-start gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className='px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>October 2025</div>
                                <div className='flex-2 px-2 md:px-0'>
                                    <h1 className='text-xl mb-2 font-medium'>
                                        Recognized Among Top Emerging IT Partners for Automation Projects
                                    </h1>
                                    <p className='text-foreground/70'>
                                        Industry recognition for excellence in delivering AI-powered automation solutions across multiple sectors.
                                    </p>
                                </div>

                            </div>
                            {/*December 2024  */}
                            <div className='flex  items-start gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className='px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>December 2024</div>
                                <div className='flex-2  px-2 md:px-0'>
                                    <h1 className='text-xl mb-2 font-medium'>
                                        Partnership Announced with Leading HR SaaS Platform       </h1>
                                    <p className='text-foreground/70'>
                                        Strategic collaboration to integrate AI capabilities into workforce management solutions.                            </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className=' py-20 lg:py-32  mx-auto px-4 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h1 className='text-4xl lg:text-5xl mb-6 px-2'> Stay Updated</h1>
                            <p className='text-xl text-white/90 mb-8 max-w-3xl px-2 md:px-0 mx-auto'>
                                Get the latest insights on AI, automation, and technology trends delivered to your inbox.                                    </p>
                            {/* 2 button*/}
                            <div className=" flex gap-4 max-w-md mx-auto justify-center">
                                <input type="email" placeholder="Enter your email"
                                 className=' flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-800 ' 
                                 />

                                <Button variant="light" href="/book-call" className='hover:bg-gray-300 '>
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* blog section */}
            {(activeTab === "blogs") && (
                <>
                    <section className="max-w-6xl mx-auto px-4 lg:px-0 pb-20">
                        <div className='grid md:grid-cols-3 gap-8 '>

                            {/*  AI & Automation*/}

                            <div className=' group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100 '>
                                        <img src="ai.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>AI & Automation</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />March 15, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />5 min read</span>
                                    </div>
                                    <h1 className='hover:text-blue-600 mb-2 '>Building Faster with Agentic AI</h1>
                                    <p className='text-foreground/60 '>Discover how autonomous AI agents are revolutionizing software development workflows and accelerating time-to-market.                            </p>
                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>

                                </div>
                            </div>
                            {/*  Product Development */}
                            <div className='group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100  group'>
                                        <img src="q.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>Product Development</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />March 8, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />7 min read</span>
                                    </div>
                                    <div className='pr-3 md:pr-0'>
                                        <h1 className='hover:text-blue-600 mb-2  '>How AI Accelerates Product Delivery Pipelines</h1>
                                        <p className='text-foreground/60 '> Explore practical applications of AI in CI/CD, testing automation, and deployment optimization for modern development teams.                          </p>
                                    </div>
                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>

                                </div>
                            </div>
                            {/* Talent & Strategy */}
                            <div className='group border border-gray-200  rounded-2xl  flex flex-col  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative '>
                                    <div className=' transition-transform relative h-48 overflow-hidden bg-slate-100 group'>
                                        <img src="s.jpg" alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                    </div>
                                    <div className='absolute top-4 left-4 bg-white/90 text-black/90 px-3 py-1 backdrop-blur-sm  text-center text-xs rounded-full shadow-lg'>Talent & Strategy</div>
                                </div>


                                <div className='p-6 '>
                                    <div className='flex items-center gap-4  text-sm text-foreground/60 mb-3'>
                                        <span className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />February 28, 2025</span>
                                        <span className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />6 min read</span>
                                    </div>
                                    <h1 className='hover:text-blue-600 mb-2 '>Talent + Technology: The New Hybrid Model</h1>
                                    <p className='text-foreground/60 pr-2 md:pr-0 '>Why the future of IT services lies in combining human expertise with intelligent automation for superior outcomes.                     </p>

                                    {/* button */}
                                    <Button variant="text" className="text-sm inline-flex  group !gap-0 pt-4 !text-blue-500 !font-normal " icon={<ArrowRight className="w-4 h-4 transition-all   group-hover:translate-x-2" />}> Read More</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className=' py-20 lg:py-32  mx-auto px-4 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h1 className='text-4xl lg:text-5xl mb-6 px-2'> Stay Updated</h1>
                            <p className='text-xl text-white/90 mb-8 max-w-3xl px-2 md:px-0 mx-auto'>
                                Get the latest insights on AI, automation, and technology trends delivered to your inbox.                                    </p>
                            {/* 2 button*/}
                            <div className="flex gap-4 max-w-md mx-auto justify-center">
                                                               <input type="email" placeholder="Enter your email"
                                 className=' flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-800 ' 
                                 />
                                <Button variant="light" href="/book-call" className='hover:bg-gray-300'>
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </>

            )}

            {/* news section */}
            {(activeTab === "news") && (
                <>
                    <section className='max-w-4xl md:mx-auto mx-4  pb-20 '>
                        <div className='space-y-4'>
                            {/* August 2025 */}
                            <div className='flex  items-start gap-8 bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-colors'>
                                <div className=' md:flex-none flex-1 px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>August 2025</div>
                                <div className='flex-2 pr-4'>
                                    <h1 className='text-2xl mb-3 '>
                                        Augmented Resourcing Launches AI Workflow Suite</h1>
                                    <p className=' text-lg text-foreground/70'>New suite of agentic AI tools designed to help businesses automate complex workflows with minimal configuration.</p>
                                </div>
                                {/* October 2025 */}
                            </div >
                            <div className='flex  items-start gap-8 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className='px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>October 2025</div>
                                <div className='flex-2 px-2 md:px-0'>
                                    <h1 className='text-2xl mb-3 '>
                                        Recognized Among Top Emerging IT Partners for Automation Projects
                                    </h1>
                                    <p className=' text-lg text-foreground/70 pr-4'>
                                        Industry recognition for excellence in delivering AI-powered automation solutions across multiple sectors.
                                    </p>
                                </div>

                            </div>
                            {/*December 2024  */}
                            <div className='flex  items-start gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className='px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>December 2024</div>
                                <div className='flex-2  px-2 pr-4 md:px-0'>
                                    <h1 className='text-2xl mb-3 pr-8'>
                                        Partnership Announced with Leading HR SaaS Platform                                </h1>
                                    <p className=' text-lg text-foreground/70'>
                                        Strategic collaboration to integrate AI capabilities into workforce management solutions.                            </p>
                                </div>
                            </div>
                            {/* September 2024 */}
                            <div className='flex  items-start gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-colors'>
                                <div className='px-4 py-2 text-sm text-blue-700 bg-blue-50 rounded-lg text-center'>September 2024</div>
                                <div className='flex-2  px-2 pr-4 md:px-0'>
                                    <h1 className='text-2xl mb-3 pr-6 '>
                                        500+ Projects Milestone Achieved                                </h1>
                                    <p className=' text-lg text-foreground/70 pr-6'>
                                        Celebrating successful delivery of over 500 projects across product development, AI, and talent augmentation.                            </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className=' py-20 lg:py-32  mx-auto px-4 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h1 className='text-4xl lg:text-5xl mb-6 px-2'> Stay Updated</h1>
                            <p className='text-xl text-white/90 mb-8 max-w-3xl px-2 md:px-0 mx-auto'>
                                Get the latest insights on AI, automation, and technology trends delivered to your inbox.                                    </p>
                            {/* 2 button*/}
                            <div className="flex gap-4 max-w-md mx-auto justify-center">
                                <input type="email" placeholder="Enter your email"
                                 className=' flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-800 ' 
                                 />
                                <Button variant="light" href="/book-call" className='hover:bg-gray-300'>
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </>
    );
}