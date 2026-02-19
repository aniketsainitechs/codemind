import { HiArrowLongLeft } from "react-icons/hi2";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
export default  function Case1() {
    return(
<>
<div className="max-w-7xl mx-auto">
<div className=" bg-gray-200 grid grid-cols-1 md:grid-cols-2 mt-20  ">


<div className="xl:px-10 px-5 pt-10">
<Link href ="/case"className="text-blue-600 hover:text-blue-700  inline-flex gap-2"> <HiArrowLongLeft className="w-4 h-4 mt-1" />Back to Case Studies</Link><br/>
<button className="text-blue-700 bg-blue-200 py-2 px-4 rounded-4xl text-sm mt-10">Financial technology</button>
<p className="text-black text-5xl py-5">AI-Driven Workflow Automation for FinTech Firm </p>
<p className="text-blue-600 text-2xl">Reduced manual data entry by 60% with agentic AI orchestration</p>
<p className="text-gray-600 text-xl py-8">A leading financial services provider needed to streamline their data processing workflows and reduce manual intervention in routine tasks.</p>
<button className="text-white inline-flex gap-3 bg-black hover:bg-gray-900  text-sm  font-semibold py-2.5 px-5 rounded-lg">Learn More About This Solution <ArrowRight className="w-4 h-4"/></button>
</div>


<div className="py-15 px-5 xl:py-40 xl:px-0">
    <img  className="h-[350px] max-w-[550px] border border-blue-200 object-cover  rounded-2xl w-full"src="./photo-1.jfif"></img></div>
</div>

{/*2. */}
<div className="bg-white pt-20  px-10">
                   <h className="text-3xl text-black">Client Background</h>
</div>
<div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-10 xl:px-10 px-5 pt-10 pb-20">
     
     
      <div className=" rounded-xl"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1758876202430-a0595cf17d3e?')" ,
backgroundSize:"cover",
backgroundPosition:"Center",
      }}
    >
      </div>



  <div className="bg-gray-100 rounded-2xl border border-gray-200 xl:px-10 px-5  pt-8 pb-8 xl:h-[280px]">
    <p className="text-gray-500 text-sm">Industary</p>
    <p className="text-blue-600 text-xl pt-3 pb-5">Financial Technology</p>
    <hr className="text-gray-300 "/>
    <p className="text-gray-500 text-sm pt-6">Challenge Overview</p>
    <p className="text-gray-700 text-lg pt-4">The client was processing thousands of financial documents daily, requiring significant manual data entry and verification. This led to delays, errors, and high operational costs.</p>
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
<p className="text-gray-700 ">Manual processing of 5,000+ documents daily</p>
  </div>
  </div>

 <div className="border border-gray-300 rounded-xl py-6  bg-white">
<div className="flex item-start gap-3 pl-5">
<div className="  flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">High error rates in data entry (15-20%)</p>
  </div>
  </div>


   <div className="border border-gray-300 rounded-xl py-6 bg-white ">
<div className="flex item-start gap-3 pl-5">
<div className="  flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Average processing time of 48 hours per batch</p>
  </div>
  </div>


   <div className="border border-gray-300 rounded-xl py-6 bg-white">
<div className="flex item-start gap-3 pl-5">
<div className=" flex-shrink-0 flex items-center justify-center  rounded-full w-8 h-8 bg-red-100 text-center text-red-600 ">
    <span>!</span>
</div> 
<p className="text-gray-700 ">Compliance risks due to human oversight</p>
  </div>
  </div>


</div>
</div>


{/*4s*/}
    <div>
<div className="bg-white xl:px-45 px-5 py-20">
    <p className="text-black text-3xl">Our Approach</p>
    <p className="text-gray-600 text-lg pt-5">We implemented an agentic AI system combining OCR, natural language processing, and intelligent workflow automation. The solution was integrated with their existing CRM and compliance systems.</p>
</div>



</div>

{/*4 */}
<div className=" bg-blue-50 grid grid-cols-1 xl:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-5">
    <div className="">
<p className="text-3xl text-gray-900 mb-10 ">Solution Overview</p>
<p className="text-gray-500 text-lg mb-6">Built a multi-agent AI system that automatically extracts, validates, and routes financial data with human-in-the-loop oversight for critical decisions.</p>
<p className="text-gray-900 text-xl mb-3">Key Modules</p>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Document Classification Engine</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Document Classification Engine</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-3 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Document Classification Engine</button>
<button className="bg-white flex justify-items-start gap-3 text-left mb-10 border border-gray-200 shadow-md w-full rounded-lg py-5  pl-5 text-[15px] text-gray-800"><LuCircleCheckBig className="text-blue-600 w-5 h-5"/>Document Classification Engine</button>
    <p className="text-gray-900 text-xl mb-4">Technologies Used</p>

    <div className="bg-blue-50  flex flex-wrap gap-3    ">
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">OpenAI API</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">LangChains</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4">Python</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">Make.com</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">PostgreSQL</span>
    <span className="bg-white  rounded-3xl  border border-blue-200 text-sm text-gray-800 py-2 px-4 ">AWS Lambda</span>

    </div>
   
   </div>

<div className="relative rounded-xl w-full h-[300px] md:h-[350px] xl:mt-20   overflow-hidden" 
    style={{ backgroundImage:"url('https://images.unsplash.com/photo-1758626052247-79003b45f802?')",
        backgroundSize: "cover",
    backgroundPosition: "center",
    }}>
        <div className="absolute  bottom-0 left-0 w-full h-[50px] overflow-hidden bg-gradient-to-t from-blue-900/80 to-transparent"></div>
</div>



    
</div>


{/*5 */}
<div className="bg-white text-center pt-18"><h1 className="text-3xl text-gray-900">Measurable Results</h1>
</div>
<div className="bg-white grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-16 xl:px-40 px-5 pt-12 pb-20 items-start  ">
<div className="">
    <div className="bg-blue-100 w-16 h-16 mb-6 flex rounded-full items-center justify-center mx-auto"><FaRegClock  className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">60%</p>
    <p className="text-sm text-gray-600 leading-relaxed">faster processing time</p>
</div>
</div>
 
 <div>
    <div className="bg-blue-100 w-16 h-16 mb-6 flex rounded-full items-center justify-center mx-auto"><LuCircleCheckBig className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">95%</p>
    <p className="text-sm text-gray-600 leading-relaxed">accuracy improvement</p>
</div>
</div>


<div>
    <div className="bg-blue-100 w-16 h-16  mb-6 flex rounded-full items-center justify-center mx-auto"><FiDollarSign className="text-blue-600 w-8 h-8"/></div>
<div className="flex flex-col items-center text-center">
    <p className="text-4xl text-blue-600 mb-2">30%</p>
    <p className="text-sm text-gray-600 leading-relaxed ">cost reduction</p>
</div>
</div>
</div>

<div className="bg-blue-700 py-20 xl:px-60 px-5 ">
    <p className="text-6xl opacity-50 text-gray-50 text-center">"</p>
<p className="text-gray-100 text-2xl py-8 text-center leading-10 font-sans"> The AI automation has transformed our operations. What used to take days now takes hours, and our team can focus on strategic work instead of data entry.</p>
<p className="text-sm text-center text-white ">Operations Director</p>
<p className="text-sm text-gray-200 text-center">Leading FinTech Provider</p>
</div>


<div className="bg-white py-20 xl:px-0 px-10 ">
    
    <p className="text-black  text-center text-3xl xl:leading-18">Ready to see what we can build for you?</p>
    <p className="text-xl text-center text-gray-600 xl:pt-0 pt-4 ">Let's discuss your project and explore how we can deliver similar results.</p>
<div className="flex justify-center pt-10">
<button className="rounded-lg inline-flex gap-4 items-center justify-center bg-black  text-white hover:bg-gray-900 text-sm py-3 px-5">Talk to Us <GoArrowRight  className="w-4 h-4 text-white"/></button>
</div></div>



   

</div>







</>
    );
}