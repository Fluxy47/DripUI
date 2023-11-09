import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import SideBar from "../../components/drip/sideBars/SideBar";
import { basicSidebars } from "../../components/drip/sideBars/basicSideBars";

export default function Buttons() {
  return (
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS SideBars"}
        description={
          "DripUI offers a wide range of sidebars, including simple navbar, animated hamburger sidebar, ...."
        }
        url={"/components/sidebar"}
      />
      <PageHeading
        title={"sidebar Components"}
        alt={"sidebar"}
        description={
          "The sidebar on a website enhances user experience by serving as a navigation hub, offering quick links for easy exploration and access to vital information. It also acts as a prime location for promotions, featuring banners or ads to captivate visitors' attention. In content-heavy contexts, a well-designed sidebar contributes to enhanced readability by providing supplementary information and suggesting related articles."
        }
      />

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Basic sidebar&apos;s</h2>
        <div className="flex flex-col lg:gap-8">
          {basicSidebars.map((sidebar, index) => (
            <SideBar key={"sidebar" + index} {...{ sidebar }} />
          ))}
        </div>
      </section>
    </section>
  );
}
