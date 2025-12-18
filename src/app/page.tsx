"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Link from "next/link";
import { HomepageBannerData, HomepageStripBanner, HomepageTextWithImage, HomepageWhyChoose, HomepageTextBoard } from "@/constants/homepage";
import Banner from "@/components/banner";
import StripBanner from "@/components/stripBanner";
import TextWithImage from "@/components/textWithImage";
import WhyChooseSnapDesk from "@/components/why-choose";
import TextBoard from "@/components/textBoard";
import "aos/dist/aos.css";
import { useState } from "react";



export default function Home() {
  const [activePanel, setActivePanel] = useState(99);

  const onActivePanel = (id: number) => {
    setActivePanel(id);
  }

  return (
    <>
      <Banner data={HomepageBannerData} handleActivePanel={onActivePanel} activePanel={activePanel}/>
      <StripBanner data={HomepageStripBanner}/>
      <TextWithImage data={HomepageTextWithImage}/>
      <WhyChooseSnapDesk data={HomepageWhyChoose}/>
      <TextBoard data={HomepageTextBoard}/>
    </>
  );
}
