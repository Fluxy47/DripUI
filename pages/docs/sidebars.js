import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import SideBar from "../../components/drip/sideBars/SideBar";
import { basicSidebars } from "../../components/drip/sideBars/basicSideBars";

export default function Buttons() {

  return (
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS Buttons"}
        description={
          "DripUI offers a wide range of responsive NavBars, including outlined navbar, animated hamburger menus, ...."
        }
        url={"/components/sidebar"}
      />
      <PageHeading
        title={"sidebar Components"}
        alt={"sidebar"}
        description={
          "The sidebar component is needed in applications and websites as a site must have a form of navigation for users, DripUI offers a wide range of responsive NavBars, including outlined navbar with animated hamburger menus for mobile state."
        }
      />

      <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Basic sidebar&apos;s</h2>
        <div className="flex flex-col lg:gap-8">
         {basicSidebars.map((sidebar, index) => (<SideBar key={"sidebar" + index} {...{ sidebar }} />))} 
        </div>
      </section>
    </section>
  );
}





