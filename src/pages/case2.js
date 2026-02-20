import { HiArrowLongLeft } from "react-icons/hi2";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";
import Button from "@/components/ui/Button";
export default  function Case1() {
    return(
<>
<div className="max-w-7xl mx-auto">
<div className=" bg-blue-50 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20  ">


<div className="xl:px-10  px-5 pt-15">
<Link href ="/case"className="text-blue-600 hover:text-blue-700  inline-flex gap-2"> <HiArrowLongLeft className="w-4 h-4 " />Back to Case Studies</Link><br/>
<button className="text-blue-700 bg-blue-100 py-2 px-4 rounded-4xl text-sm mt-8">HR Technologys</button>
<p className="text-black text-4xl md:text-5xl py-5">Cloud-Based HR Management Platform</p>
<p className="text-blue-600 text-2xl">Reduced administrative effort by 50% with scalable SaaS architecture</p>
<p className="text-gray-600 text-xl py-6">Designed and developed a comprehensive HR platform to manage recruitment, payroll, and performance analytics for a workforce management company.</p>
   <Button
                            variant="primary"
                            className="py-2.5 px-5 inline-flex"
                            icon={<ArrowRight className="w-4 h-4" /> }
                        >
                            Learn More About This Solution
                        </Button></div>


<div className="py-15 px-5 xl:py-40 lg:py-40 xl:px-0">
    <img  className="h-[350px] w-[550px] border border-blue-200 object-cover  rounded-2xl w-full"src="./photo-17.jfif"></img></div>
</div>

{/*2. */}
<div className="bg-white pt-20  px-10">
                   <h className="text-3xl text-black">Client Background</h>
</div>
<div className="bg-white grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10 xl:px-10 px-5 pt-10 pb-20">
     
     
      <div className=" rounded-xl relative h-[280px]"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1758518730162-09a142505bfd?')" ,
backgroundSize:"cover",
backgroundPosition:"Center",
      }}
    >
        <div className=" rounded-xl absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      </div>



  <div className="bg-gray-100 rounded-2xl border border-gray-200 xl:px-10 lg:px-6  px-5 pt-5 xl:pt-8  lg:pt-4 lg:h-[280px] xl:h-[280px] h-[380px]">
    <p className="text-gray-500 text-sm">Industary</p>
    <p className="text-blue-600 text-xl md:pt-3 lg:pt-2 pb-5">HR Technology & SaaS</p>
    <hr className="text-gray-300 "/>
    <p className="text-gray-500 text-sm pt-6 pb-3">Challenge Overview</p>
    <p className="text-gray-700 text-lg ">The client needed a modern, cloud-based solution to replace their legacy systems and provide customers with real-time workforce analytics and automated HR processes.</p>
  </div>

</div>
 

 {/*3*/}
<hr className="text-gray-300"/>
<div className="bg-gray-100 pt-20 px-5 xl:px-40">
                   <h className="text-3xl text-black">Key Challenges</h></div>
<div>
    <div className=" bg-gray-100 grid grid-cols-1 xl:grid-cols-2 gap-6 pt-8 pb-20 xl:px-40 px-5">

  <div className="border border-gray-300 rounded-xl py-6 bg-white">
<div className="flex item-start gap-3 pl-5">
<div className=" flex-shrink-0 rounded-full w-8 h-8 bg-red-100 flex items-center justify-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Legacy system integration complexity</p>
  </div>
  </div>

 <div className="border border-gray-300 rounded-xl py-6  bg-white">
<div className="flex item-start gap-3 pl-5">
<div className="   flex items-center justify-center rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Need for real-time data synchronization</p>
  </div>
  </div>


   <div className="border border-gray-300 rounded-xl py-6 bg-white ">
<div className="flex item-start gap-3 pl-5">
<div className="   flex items-center justify-center rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Multi-tenant architecture requirements</p>
  </div>
  </div>


   <div className="border border-gray-300 rounded-xl py-6 bg-white">
<div className="flex item-start gap-3 pl-5">
<div className="  flex items-center justify-center  rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Scalability for 10,000+ concurrent userst</p>
  </div>
  </div>


</div>
</div>


{/*4s*/}
    <div>
<div className="bg-white xl:px-45 px-5 py-20">
    <p className="text-black text-3xl">Our Approach</p>
    <p className="text-gray-600 text-lg pt-5">We built a microservices-based SaaS platform with modular features, API-first architecture, and comprehensive role-based access controls.</p>
</div>



</div>

{/*4 */}
<div className=" bg-blue-50 grid grid-cols-1 xl:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-5">
    <div className="">
<p className="text-3xl text-gray-900 mb-10 ">Solution Overview</p>
<p className="text-gray-500 text-lg mb-6">A fully responsive web application with mobile support, featuring automated onboarding, payroll processing, performance tracking, and advanced analytics dashboards.</p>
<p className="text-gray-900 text-xl mb-3">Key Modules</p>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Employee Onboarding System</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Payroll Automation Engine</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Performance Management</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-10 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>DAnalytics & Reporting Dashboard</button>
    <p className="text-gray-900 text-xl mb-4">Technologies Used</p>

    <div className="bg-blue-50  flex flex-wrap gap-3    ">
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">React</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">Node.js</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">MongoDB</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">AWS</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">Docker</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">Kubernetess</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">Redis</span>

    </div>
   
   </div>

<div className="relative rounded-xl w-full h-[300px] md:h-[350px] xl:mt-20   overflow-hidden" 
    style={{ backgroundImage:"url('https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?')",
        backgroundSize: "cover",
    backgroundPosition: "center",
    }}>
        <div className="absolute  bottom-0 left-0 w-full h-[50px] overflow-hidden bg-gradient-to-t from-blue-900/80 to-transparent">
                        <p className=" ml-5 text-sm text-white">Solution Implementation</p>

        </div>
</div>



    
</div>


{/*5 */}
<div className="bg-white text-center pt-18"><h1 className="text-3xl text-gray-900">Measurable Results</h1>
</div>
<div className="bg-white grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-16 xl:px-40 px-5 pt-12 pb-20 items-start  ">
<div className="">
    <div className="bg-blue-100 w-16 h-16 mb-6 flex rounded-full items-center justify-center mx-auto"><IoMdTrendingUp   className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">50%</p>
    <p className="text-sm text-gray-600 leading-relaxed">reduction in admin tasks</p>
</div>
</div>
 
 <div>
    <div className="bg-blue-100 w-16 h-16 mb-6 flex rounded-full items-center justify-center mx-auto"><FaRegClock  className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">4x</p>
    <p className="text-sm text-gray-600 leading-relaxed">faster onboarding</p>
</div>
</div>


<div>
    <div className="bg-blue-100 w-16 h-16  mb-6 flex rounded-full items-center justify-center mx-auto"><LuCircleCheckBig className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">99.9%</p>
    <p className="text-sm text-gray-600 leading-relaxed ">uptime achieved</p>
</div>
</div>
</div>

<div className="bg-blue-700 py-20 xl:px-60 px-5 ">
    <p className="text-6xl opacity-50 text-gray-50 text-center">"</p>
<p className="text-gray-100 text-2xl py-8 text-center leading-10 font-sans"> This platform has revolutionized how we manage HR processes. Our clients love the intuitive interface and real-time insights.</p>
<p className="text-sm text-center text-white ">Product Head</p>
<p className="text-sm text-gray-200 text-center">HR SaaS Company</p>
</div>


<div className="bg-white py-20 xl:px-0 px-10 ">
    
    <p className="text-black  text-center text-3xl xl:leading-18">Ready to see what we can build for you?</p>
    <p className="text-xl text-center text-gray-600 xl:pt-0 pt-4 ">Let's discuss your project and explore how we can deliver similar results.</p>
<div className="flex justify-center pt-10">

                        <Button
                            variant="primary"
                            className=" inline-flex"
                            icon={<ArrowRight className="w-4 h-4" /> }
                        >
                           Talk To Us
                        </Button>    </div></div>



   

</div>







</>
    );
}