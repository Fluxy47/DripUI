import Head from "next/head";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import Button from "../../components/drip/buttons/Button";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Buttons() {
  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Buttons"}
        description={
          "DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more."
        }
        url={"/components/buttons"}
      />
      <PageHeading
        title={"Button Components"}
        alt={"button"}
        description={
          "The button component is commonly used in application and websites to launch an action or link to other pages. DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more."
        }
      />

      <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* <div className="flex flex-col gap-4">
          {BasicBtns.map((btn) => (
            <Button {...btn} key={btn.type} text="" />
          ))}

          {BasicBtns.map((btn, i) => (
            <Button {...btn} key={btn.type + i} icons text=" Icons" />
          ))}
        </div>

        <div className="flex flex-col gap-4 ">
          {ColoredShadowBtns.map((btn) => (
            <Button {...btn} key={btn.type} text="" />
          ))}
        </div> */}
         {/* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 10px;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  color: #fff;
  font-weight: 400px;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(15px); */}

       <div className="relative top-0 left-0 w-[250px] h-[50px] m-0 flex justify-center items-center">
        <a className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-[rgba(255, 255, 255, 0.05)]">Hi there</a>

       </div>

      </section>
    </>
  );
}
