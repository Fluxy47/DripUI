import { useState } from "react";

const AnimatedSideBar = ({ sidebar, navEL }) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  const [open, setOpen] = useState(true);
  return (
    <div ref={navEL} className="flex bg-black">
      {sidebar.category.map((item) => (
        <section
          key={item.id}
          className={`flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}
          style={{
            transform: `translateX(${open ? "0" : "-100%"})`,
            opacity: open ? "1" : "0",
            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          <div className={item.logoStyle}>Logo</div>
          <div className={item.SectionStyle}>
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3">
                <label className={item.labelStyle}>Navigation</label>
                {item.children.map((child) => (
                  <a key={child.id} className={item.childrenStyle} href="#">
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
                {item.children.map((child) => (
                  <a key={child.id} className={item.childrenStyle} href="#">
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
                {item.children.map((child) => (
                  <a key={child.id} className={item.childrenStyle} href="#">
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
      <button
        className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group relative"
        onClick={() => setOpen((prevstate) => !prevstate)}
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
    </div>
  );
};

export default AnimatedSideBar;
