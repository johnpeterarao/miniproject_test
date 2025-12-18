"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type StripBannerData = {
    title: string;
    text: string;
    ctaText: string;
    ctaButtonColor: string;
    ctaLink: string;
    image: string;
}

export default function StripBanner({ data } : { data: StripBannerData } ) {
    const { title, text, ctaText, ctaButtonColor, ctaLink, image } = data;
    
    return (
        <section className="stripBanner_sec">
            <div className="container">
                <div className="stripBanner_block">
                    <div className="stripBanner_block_content" data-aos="fade-up" data-aos-delay="0">
                        <div>
                            <h3 className="stripBanner_title" dangerouslySetInnerHTML={{ __html: title }}></h3>
                            <p>{text}</p>
                            <div className="stripBanner_actions">
                                <Link href={`${ctaLink}`} className={`btn btn-${ctaButtonColor}`}>{ ctaText }</Link>
                            </div>
                        </div>
                    </div>
                    <div className="stripBanner_block_img">
                        <Image 
                            src={`/${image}`}
                            width={600}
                            height={480}
                            alt="banner image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}