import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Section2 from "@/sections/section2";
import Section3 from "@/sections/section3";

export default function Home() {
  return (
    <>
      <Header />
      <Section2 />
      <Section3 />
    </>
  );
}
