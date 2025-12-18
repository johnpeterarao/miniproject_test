"use client";

import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/constants/footer";
import { useEffect } from "react";
import AOS from "aos";


type footerLogo = {
    path: string;
    link: string;
}
type submenu = {
    text: string;
    link: string;
}
type footerMenu = {
    heading: string;
    submenu: submenu []
}
type footerType = {
    footerLogo: footerLogo;
    footerMenu: footerMenu[];
    footerOutro: string;
}

export default function Footer() {
    const { footerLogo, footerMenu, footerOutro } : footerType  = FooterData; 

    useEffect( () => {
        AOS.init({
            duration: 600,
            once: true,
            easing: "ease-in-out",
        });
    }, [])

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_hldr">
                    <div className="footer_logo" data-aos="fade-up" data-aos-delay="0">
                        <Image
                            src={`/${footerLogo.path}`}
                            alt="Logo"
                            width={110}
                            height={110}
                        />
                    </div>
                    <div className="footer_row">
                        { footerMenu.map((menu, i) => (
                            <div className="footer_col" key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 50}>
                                <h4>{menu.heading}</h4>
                                <ul>
                                { menu?.submenu.map((submenu, ind) => (
                                    <li key={ind}>
                                        <Link href={submenu.link}>{submenu.text}</Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        )) }
                    </div>
                </div>
                <div className="footer_credits">
                    { footerOutro }
                </div>
            </div>
        </footer>
    )
}