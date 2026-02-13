import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react';
export default function Industries() {
    return (
        <>

<div className="min-h-screen bg-background pt-20">
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl mb-6">Driving Innovation Across Industries with Technology, Talent & AI</h1>
<p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">We empower businesses in finance, SaaS, HR, and events to scale faster through modern engineering, automation, and expert talent — delivering measurable outcomes and long-term digital impact.</p>
   
   <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="" className=" flex bg-black text-white text-sm font-medium py-[11px] px-4 rounded-lg cursor-pointer gap-4">Explore Our Solutions  <ArrowRight className='h-5 w-4'/></a>
        <a href="" className="bg-white border border-gray-300 text-black text-sm font-medium py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200">Talk to Our Team</a>
</div>
    </div>

</div>

    </section>

</div>
        </>
    );

}