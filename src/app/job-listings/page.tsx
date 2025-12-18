import Image from "next/image";
import { JoblistingBannerData, jobListingPageData } from "@/constants/joblisting";

export default function JobListingPage() {
    return (
        <>
            <section className="banner banner_hero">
                <div className="banner_hldr banner_hldr_btm">
                    <div className="banner_image">
                    <Image 
                        src={`/${JoblistingBannerData.image}`}
                        width={1200}
                        height={600}
                        alt="banner image"
                    />
                    </div>
                    <div className="banner_text banner_text_white">
                        <div className="container">
                            <div className="" data-aos="fade-up" data-aos-delay="0">
                                <h1>{JoblistingBannerData.title}</h1>
                                <p>{JoblistingBannerData.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="jobPage_sec">
                <div className="container">
                    <div className="jobPage_lists">
                        {
                            jobListingPageData.map((job, ind) => (
                                <div className="jobPage_card" key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50}>
                                    <h3><a href="">{job.title}</a> </h3>
                                    <p className="jobPage_card_setup">{job.excerpt}</p>
                                    <p>{ job.shortDescription}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}