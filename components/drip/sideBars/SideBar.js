import Link from "next/link";
import { useRef, useState } from "react";
import copyToClipboard from "../../../utils/function/copyToClipBoard";
import AnimatedSideBar from "../sideBars/AnimatedSideBar";

const SideBar = ({ sidebar }) => {
  const navEL = useRef(null);
  const [CopySuccess, setCopySuccess] = useState(false);
  return (
    <div>
      <p className="text-lg font-bold">{sidebar.type}</p>
      <div className="flex flex-col w-full mx-auto mt-8 gap-8 p-4 pt-6 rounded-lg shadow-lg shadow-slate-500/30  mb-72">
        <div className="lg:flex gap-2 hidden"></div>

        <section className="flex w-full h-full">
          {sidebar.hasButton && (
            <AnimatedSideBar sidebar={sidebar} navEL={navEL} />
          )}
          {!sidebar.hasButton && (
            <>
              {sidebar.category.map((item) => (
                <section ref={navEL} key={item.id} className={item.mainStyle}>
                  <div className={item.logoStyle}>Logo</div>

                  <div className={item.SectionStyle}>
                    <nav className="-mx-3 space-y-6 ">
                      <div className="space-y-3">
                        <label className={item.labelStyle}>Navigation</label>

                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            className={item.childrenStyle}
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                              />
                            </svg>
                            <span className="mx-2 text-sm font-medium">
                              {child.text}
                            </span>
                          </a>
                        ))}

                        <label className={item.labelStyle}>Content</label>
                        {item.children2.map((child) => (
                          <a
                            key={child.id}
                            className={item.childrenStyle}
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                              />
                            </svg>

                            <span className="mx-2 text-sm font-medium">
                              {child.text}
                            </span>
                          </a>
                        ))}
                        <label className={item.labelStyle}>Customization</label>
                        {item.children3.map((child) => (
                          <a
                            key={child.id}
                            className={item.childrenStyle}
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                              />
                            </svg>

                            <span className="mx-2 text-sm font-medium">
                              {child.text}
                            </span>
                          </a>
                        ))}
                      </div>
                    </nav>
                    <a href="#" className="flex items-center px-4 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full h-9 w-9"
                        src="https://images.unsplash.com/photo-1695236195335-18e1640688d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                        alt="avatar"
                      />
                      <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                        CyanHart
                      </span>
                    </a>
                  </div>
                </section>
              ))}
            </>
          )}

          <div className="bg-black w-full ml-auto h-screen " />
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
};

export default SideBar;
