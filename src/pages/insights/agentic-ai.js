import Link from 'next/link';
import { Calendar, CircleAlert, CircleCheck, Clock, Lightbulb, TrendingUp, User } from 'lucide-react';
export default function AgenticAI() {
    return (
        <>
            {/* Building Faster */}
            <section className="bg-gradient-to-br from-blue-50  to-slate-50 pt-32 pb-12">
                <div className="mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/insights" className="inline-flex text-blue-600 hover:text-blue-700 mb-6">← Back to Insights</Link>
                        <Link href="/insights" className=" inline-block px-4 py-2  bg-blue-100 text-blue-700 rounded-full text-sm mb-6">AI & Automation</Link>
                        <h2 className="md:text-5xl text-4xl mb-6 ">Building Faster with Agentic AI</h2>
                        <div className='flex items-center gap-6 text-foreground/60'>
                            <span className='flex items-center gap-2'>
                                <Calendar className='w-4 h-4' />
                                March 15, 2025
                            </span>
                            <span className='flex items-center gap-2'>
                                <Clock className='w-4 h-4' />
                                5 min read

                            </span>
                            <span className='flex items-center gap-2'>
                                <User className='w-4 h-4' />
                                Team Augmented Resourcing
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* AI IMAGE */}
            <section className="px-4 pb-12  mx-auto  lg:px-8">
                <div className='max-w-4xl mx-auto'>
                    <div className=' aspect-video  rounded-xl overflow-hidden bg-slate-100'>
                        <img src="/ai2.jpg" alt="AI Image"
                            className='object-cover w-full h-full ' />
                    </div>
                </div>
            </section>
            <div className='max-w-4xl mx-auto'>
                <p className='text-xl leading-relaxed bg-blue-50/50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12'>
                    Agentic AI represents a fundamental shift in how we approach software development and business automation.
                    Unlike traditional AI systems that simply respond to queries, agentic AI systems can take autonomous actions,
                    make contextual decisions, and orchestrate complex workflows.
                </p>
                <h2 className="text-3xl mt-16 mb-6 pb-4 border-b-2 border-blue-100">What Makes Agentic AI Different?</h2>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'> Traditional AI tools are reactive—they wait for instructions and execute predefined tasks. Agentic AI, on the other hand, is proactive and autonomous.</p>

                <div className='my-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100'>
                    <div className='flex gap-3 mb-6 items-center'>
                        <div className='flex justify-center items-center rounded-lg text-white bg-blue-600 text-center w-10 h-10 '><Lightbulb className='h-5 w-5 ' /></div>
                        <h className="text-xl text-blue-900">Core Capabilities</h>
                    </div>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3'> <CircleCheck className=' h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5' /> <span className='text-foreground/85 leading-relaxed'>Understand context and business goals without explicit instruction</span></li>
                        <li className='flex items-start gap-3'> <CircleCheck className=' h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5' /> <span className='text-foreground/85 leading-relaxed'>Make intelligent decisions based on changing conditions and priorities</span></li>
                        <li className='flex items-start gap-3'> <CircleCheck className=' h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5' /> <span className='text-foreground/85 leading-relaxed'>Execute multi-step workflows autonomously with minimal oversight</span></li>
                        <li className='flex items-start gap-3'> <CircleCheck className=' h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5' /> <span className='text-foreground/85 leading-relaxed'>Learn and adapt from outcomes to continuously improve performance</span></li>
                    </ul>
                </div>
                <h2 className="text-3xl mt-16 mb-6 pb-4 border-b-2 border-blue-100">Real-World Applications in Development</h2>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'> We've seen remarkable results implementing agentic AI in product development workflows across our client portfolio:</p>
                <h3 className='text-2xl mt-12 mb-4 text-blue-900'>1. Automated Code Review & Optimization</h3>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'>AI agents can review pull requests, identify potential issues, suggest optimizations, and even implement fixes autonomously—reducing review cycles from days to hours.</p>
                <h3 className='text-2xl mt-12 mb-4 text-blue-900'>2. Intelligent Testing Orchestration</h3>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'>
                    Instead of running all tests on every commit, agentic systems analyze code changes and selectively run relevant tests, dramatically reducing CI/CD pipeline times.                 </p>
                <h3 className='text-2xl mt-12 mb-4 text-blue-900'>3. Documentation Generation
                </h3>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'>AI agents can automatically generate and update documentation by analyzing code changes, API modifications, and system architecture updates.</p>
                {/* Business Impact*/}
                <p className='text-3xl mt-16 mb-6 pb-4 border-b-2 border-blue-100'>The Business Impact</p>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'>Organizations implementing agentic AI in their development pipelines typically see transformative results:</p>
                {/* growth % */}
                <div className='  my-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {/* 40-60% */}
                    <div className='border-2 border-blue-100 rounded-xl  justify-center items-center p-6 text-center  hover:border-blue-300 '>
                        <div className='flex gap-3 justify-center items-center text-center mb-2 '>
                            <div className=' h-5 w-5 text-blue-600'>< TrendingUp /> </div>
                            <h2 className='text-3xl text-blue-600 '>40-60%</h2>
                        </div>
                        <p className='text-sm text-foreground/70'>Reduction in time-to-market</p>
                    </div>
                    <div className='border-2 border-blue-100 rounded-xl  justify-center items-center p-6 text-center  hover:border-blue-300 '>
                        <div className='flex gap-3 justify-center items-center text-center mb-2 '>
                            <div className=' h-5 w-5 text-blue-600'>< TrendingUp /> </div>
                            <h2 className='text-3xl text-blue-600 '>30-50%</h2>
                        </div>
                        <p className='text-sm text-foreground/70'>Decrease in manual QA effort</p>
                    </div>
                    <div className='border-2 border-blue-100 rounded-xl  justify-center items-center p-6 text-center  hover:border-blue-300 '>
                        <div className='flex gap-3 justify-center items-center text-center mb-2 '>
                            <div className=' h-5 w-5 text-blue-600'>< TrendingUp /> </div>
                            <h2 className='text-3xl text-blue-600 '>95%+</h2>
                        </div>
                        <p className='text-sm text-foreground/70'>Code quality improvement</p>
                    </div>
                    <div className='border-2 border-blue-100 rounded-xl  justify-center items-center p-6 text-center  hover:border-blue-300 '>
                        <div className='flex gap-3 justify-center items-center text-center mb-2 '>
                            <div className=' h-5 w-5 text-blue-600'>< TrendingUp /> </div>
                            <h2 className='text-3xl text-blue-600 '>2x</h2>
                        </div>
                        <p className='text-sm text-foreground/70'>Developer productivity</p>
                    </div>
                </div>
                {/* GETTING STARTED */}
             <div className=' my-8 p-6 bg-green-50  border border-green-200 rounded-xl'>
               <div className='flex gap-2 items-center text-center mb-2'>
                <div className='h-6 w-6 text-green-600 '><CircleAlert  /></div>
                <h className="text-lg  text-green-900">Getting Started</h>
                </div>
                <p className='text-foreground/80 leading-relaxed'>The key to successful agentic AI implementation is starting small. Identify a specific, repetitive workflow in your development process and implement an AI agent to handle it. Monitor the results, iterate, and gradually expand to more complex workflows.</p>

             </div>
             <div>
                <p className='text-lg text-foreground/85 leading-relaxed mb-6'>At Augmented Resourcing, we help organizations identify the right opportunities for agentic AI implementation and build custom solutions tailored to their specific needs.</p>
             </div>
            </div>
            {/* Related Articles */}
            <section className='bg-slate-50 py-20 border-t border-gray-300'>
                <div className='max-w-4xl mx-auto px-4 lg:px-8'>
                    <h2 className='text-2xl text-black'>Related Articles</h2>


                </div>

            </section>

        </>
    );
}