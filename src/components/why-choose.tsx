import Link from "next/link";
import Image from "next/image";

type imageData = {
    iconPath: string;
    title: string;
    text: string;
}
type data = {
    title: string;
    ctaText: string;
    ctaButtonColor: string;
    ctaLink: string;
    imageData: imageData[]
}
export default function WhyChooseSnapDesk({ data } : {data : data}) {
    const { title, ctaText, ctaButtonColor, ctaLink, imageData } = data;
    
    return (
        <section className="iconText_sec">
            <div className="container">
                <h3 data-aos="fade-up" data-aos-delay="0">{title}</h3>
                <div className="iconText_row">
                    {
                        imageData?.map((card, i) => (
                            <div className="iconText_col" key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 50}>
                                <div className="iconText_card">
                                    <div className="iconText_card_img">
                                        <Image
                                            src={`/${card?.iconPath}`}
                                            width={140}
                                            height={140}
                                            alt=""
                                        />
                                    </div>
                                    <div className="iconText_card_text">
                                        <h3>{ card?.title }</h3>
                                        <p>{ card?.text }</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="iconText_actions" data-aos="fade-up" data-aos-delay="50">
                    <Link href={ctaLink} className={`btn btn-${ctaButtonColor}`}>{ctaText}</Link>
                </div>
            </div>
        </section>
    )
}