export const basicSidebars = [
  {
    type: "a simple sidebar",
    hasButton: false,
    category: [
      {
        id: "SideBar-1",
        mainStyle:
          "flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700",
        SectionStyle: "flex flex-col justify-between flex-1 mt-6",
        labelStyle: "px-3 text-xs text-gray-500 uppercase dark:text-gray-400",
        logoStyle:
          "w-16 h-16 basis-16 rounded-full bg-black text-white font-bold flex items-center justify-center",
        childrenStyle:
          "flex items-center px-3 py-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700",
        children: [
          {
            id: "About-1",
            text: "About",
            href: "/docs/headers",
          },
          {
            id: "Career-1",
            text: "Career",
            href: "/docs/headers",
          },
          {
            id: "Events-1",
            text: "Events",
            href: "/docs/headers",
          },
        ],
        children2: [
          {
            id: "Guides-1",
            text: "Guides",
            href: "/docs/headers",
          },
          {
            id: "Career-1",
            text: "Career",
            href: "/docs/headers",
          },
          {
            id: "Checklist-1",
            text: "Checklist",
            href: "/docs/headers",
          },
        ],
        children3: [
          {
            id: "Themes-1",
            text: "Themes",
            href: "/docs/headers",
          },
          {
            id: "Setting-1",
            text: "Setting",
            href: "/docs/headers",
          },
        ],
      },
    ],
  },
  {
    type: "animated burger sidebar with animatons (Note:you need to implement your own toggle functionality when you copy it)",
    hasButton: true,
    category: [
      {
        id: "SideBar-2",
        mainStyle:
          " flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-opacity duration-500 ease-in-out opacity-100",
        SectionStyle: "flex flex-col justify-between flex-1 mt-6",
        labelStyle: "px-3 text-xs text-gray-500 uppercase dark:text-gray-400",
        logoStyle:
          "w-16 h-16 basis-16 rounded-full bg-black text-white font-bold flex items-center justify-center",
        childrenStyle:
          "flex items-center px-3 py-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700",
        children: [
          {
            id: "About-2",
            text: "About",
            href: "/docs/headers",
          },
          {
            id: "Career-2",
            text: "Career",
            href: "/docs/headers",
          },
          {
            id: "Events-2",
            text: "Events",
            href: "/docs/headers",
          },
        ],
        children2: [
          {
            id: "Guides-2",
            text: "Guides",
            href: "/docs/headers",
          },
          {
            id: "Career-2",
            text: "Career",
            href: "/docs/headers",
          },
          {
            id: "Checklist-2",
            text: "Checklist",
            href: "/docs/headers",
          },
        ],
        children3: [
          {
            id: "Themes-2",
            text: "Themes",
            href: "/docs/headers",
          },
          {
            id: "Setting-2",
            text: "Setting",
            href: "/docs/headers",
          },
        ],
      },
    ],
  },
];
