import { useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open ,setOpen] = useState(false);
    return (
        <>
            <nav className="bg-white border border-y-gray-200">
                <div className="max-w-7xl mx-auto flex xl:py-5 xl:px-[30px] items-center justify-between">
                    <div className="flex items-center"><img
                        src="./b2204b1a-a176-43b3-b810-e4179702a358.png"
                        className="w-[120px]"
                    ></img>
                    </div>



                    <div className="  hidden xl:flex xl:pt-3 xl text-gray-700 font-medium  gap-8  ">
                       {/*dropdown */}
                        <div className="relative ">
                        <span className="font-medium">Solution</span>
                            <button className="hover:text-blue-600  transition"
                            onClick={()=> setOpen(!open)}>
      <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ml-1 ${open ? "":""}`}/>
      
    </button>
{open &&(


    <div className="absolute left-0 mt-4 w-52 bg-white rounded-lg shadow-md border border-gray-200 z-50 overflow-hidden">
                                <a href="" className="block px-4 py-2 text-sm hover:bg-gray-100">Product Development</a>
                                <a href="" className="block px-4 py-2 text-sm hover:bg-gray-100">AI & Automation</a>
                                <a href="" className="block px-4 py-2 text-sm hover:bg-gray-100">Talent Augmentation</a>

                            </div>
                        )}</div>
                        <a href="">Industries</a>
                        <a href="">Case Studies</a>
                        <a href="">About</a>
                        <a href="">Insights</a>
                        <a href="">Contact</a>
                    </div>
                    <div>

                        <a href="" className=" hidden xl:block rounded-md text-white py-2 px-4 text-sm bg-black ">Let's Build Together</a>
                    </div>

                    {/*mobile button */}
                    <button
                        className="xl:hidden text-2xl mr-20"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>
                    {menuOpen && (
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setMenuOpen(false)}
                        ></div>
                    )}
                    <div className={`fixed right-0 bottom-0 h-full w-[400px] z-50 
transform transition-transform duration-300 bg-white
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

                        {/*close button */}
                        <div className="p-4 flex justify-end">
                            <button className="text-2xl"
                                onClick={() => setMenuOpen(false)}
                            >✕</button>
                        </div>
                        <div className="flex flex-col pl-5 gap-5  text-gray-700">
                            <a className="text-sm pt-0 text-gray-400">Solutions</a>
                            <a className="">Product Development</a>
                            <a>AI & Automation</a>
                            <a>Talent Augmentation</a>

                            <hr className="text-black/10" />

                            <a>Industries</a>
                            <a>Case Studies</a>
                            <a>About</a>
                            <a>Insights</a>
                            <a>Contact</a>


                        </div>
                        <div className="my-10 mx-2" ><a href="" className="block text-center rounded-md text-white py-2 px-4 text-sm bg-black ">Let's Build Together</a>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}