import { Linkedin, Github, Twitter, MapPin, Mail } from "lucide-react";
export default function Footer() {
    return (
        <>
            <footer className="bg-slate-900 text-gray-300 py-16   ">
                <div className=" container mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    <div className="lg:col-span-2">

                        <img src="logo.png" alt="" className="h-12 w-auto mb-4 " />
                                                <p className="text-sm text-white/70 mb-4 max-w-sm">Accelerating innovation with AI, agile engineering, and on-demand talent.</p>

                        <div className="flex gap-4">
                            <a href="" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Linkedin className='h-5 w-5' /></a>
                            <a href="" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Github />
                            </a>
                            <a href="" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Twitter />
                            </a>
                        </div>




                    </div>
                    <div>
                        <h1 className='mb-4 text-white'>Solutions</h1>
                        <ul className='space-y-3'>
                            <li>
                                <a href="" className='text-sm text-white/70 hover:text-white transition-colors '> Product Development</a>
                            </li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer'> AI & Automation</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Talent Augmentation</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4 text-white'>Industries</h1>
                        <ul className='space-y-3'>
                            <li>
                                <a href="" className='text-sm text-white/70 hover:text-white transition-colors'> Finance</a>
                            </li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer'> Healthcare</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Retail</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Technology</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4 text-white'>Company</h1>
                        <ul className='space-y-3'>
                            <li>
                                <a href="" className='text-sm text-white/70 hover:text-white transition-colors'> About Us</a>
                            </li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer'> Case Studies</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Insights</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Careers</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4 text-white'>Resources</h1>
                        <ul className='space-y-3'>
                            <li>
                                <a href="" className='text-sm text-white/70 hover:text-white transition-colors'> Blog</a>
                            </li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer'> Documentation</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer' >Support</li>
                            <li className='text-sm text-white/70 hover:text-white transition-colors cursor-pointer ' >Contact</li>

                        </ul>
                    </div>
                </div>
                <div className='border-t border-white/10 pt-8 mb-8 '>
                    <div className='flex flex-col md:flex-row gap-6 text-sm text-white/70'>

                        <div className='flex items-center gap-2 '>
                            <MapPin className='lucide lucide-map-pin h-4 w-4' />
                            <span>Global Locations</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Mail className='lucide lucide-mail h-4 w-4' />
                            <a href="" className='hover:text-white transition-colors'> info@augmentedresourcing.com</a>
                        </div>
                    </div>
                </div>

                <div className='border-t border-white/10 pt-8 text-center text-sm text-white/60'>
                    <p>Copyright © Augmented Resourcing 2025. All rights reserved.</p>
                </div>


</div>
            </footer>
        </>

    );
}
