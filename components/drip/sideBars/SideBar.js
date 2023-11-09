import Link from "next/link";
import { useRef, useState } from "react";
import copyToClipboard from "../../../utils/function/copyToClipBoard";
import AnimatedSideBar from "../sideBars/AnimatedSideBar"

const SideBar = ({ sidebar }) => {
    const navEL = useRef(null);
    const [CopySuccess, setCopySuccess] = useState(false);
    const [ open, setOpen ] = useState(true)

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
      <div>
        <p className="text-lg font-bold">{sidebar.type}</p>
        <div className="flex flex-col w-full mx-auto mt-8 gap-8 p-4 pt-6 rounded-lg shadow-lg shadow-slate-500/30  mb-72">
          <div className="lg:flex gap-2 hidden">
        </div>

     <section className="flex w-full h-full"> 
     {sidebar.hasButton && open && <AnimatedSideBar sidebar={sidebar} open={open} />}
     {!sidebar.hasButton && <>
    {sidebar.category.map((item) => (
       <section ref={navEL} key={item.id} className={item.mainStyle}>
         <a href="#">
        <img class="w-auto h-7 " src="https://merakiui.com/images/logo.svg" alt="" />
       </a>

       <div className={item.SectionStyle}>
        <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3">
            <label className={item.labelStyle}>Navigation</label>
            
                {item.children.map((child) => ( 
                 <a className={item.childrenStyle} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                    <span class="mx-2 text-sm font-medium">{child.text}</span>
                </a>
                ))}

           <label className={item.labelStyle}>Content</label>
          {item.children2.map((child) => ( 
                 <a className={item.childrenStyle} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>

                    <span class="mx-2 text-sm font-medium">{child.text}</span>
                </a>
                ))}
       <label className={item.labelStyle}>Customization</label>
              {item.children3.map((child) => ( 
                 <a className={item.childrenStyle} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>

                    <span class="mx-2 text-sm font-medium">{child.text}</span>
                </a>
                ))}
            </div>
        </nav>
        <a href="#" class="flex items-center px-4 -mx-2">
            <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
        </a>
       </div>
    </section>
        ))}  
        </>}
        
 <div className="bg-black w-[81.8%] ml-auto h-screen ">
    {sidebar.hasButton && (
       <button
       className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
       onClick={() => setOpen(prevstate => !prevstate)}
     >
       <div
         className={`${genericHamburgerLine} ${
           open
             ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
             : "opacity-50 group-hover:opacity-100"
         }`}
       />
       <div
         className={`${genericHamburgerLine} ${
           open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
         }`}
       />
       <div
         className={`${genericHamburgerLine} ${
           open
             ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
             : "opacity-50 group-hover:opacity-100"
         }`}
       />
     </button>
    )}
 </div>
</section>  
 
          <button
            onClick={() => copyToClipboard(navEL, setCopySuccess)}
            className="rounded-lg ring-2 w-fit py-3 px-6 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
          >
            Copy To clipboard
          </button>
          {CopySuccess && (
            <span className="relative flex gap-1 py-2 text-sm items-center mx-auto w-fit ">
              Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
            </span>
          )}
        </div>
      </div>
    );
  }


  export default SideBar;

 






  