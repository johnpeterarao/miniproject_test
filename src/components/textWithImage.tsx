import Image from "next/image";
import Link from "next/link";

type images = {
    path: string
}
type textWithImageData = {
    title: string;
    text: string;
    ctaText: string;
    ctaButtonColor: string;
    ctaLink: string;
    images: images[]
}
export default function TextWithImage({ data} : { data: textWithImageData }) {
    const { title, text, ctaText, ctaButtonColor, ctaLink, images } = data;
    return (
        <section className="textWithImage">
            <div className="container">
                <div className="textWithImage_intro" data-aos="fade-up" data-aos-delay="0">
                    <h3>{ title }</h3>
                    <p>{ text }</p>
                </div>
                <div className="textWithImage_row">
                    { 
                        images.map((img, i) => (
                            <div className="textWithImage_col" key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 50}>
                                <Image
                                    src={`/${img.path}`}
                                    width={435}
                                    height={355}
                                    alt={`image-${i}`}
                                />
                            </div>
                        ))
                    }
                    
                </div>
                <div className="textWithImage_actions" data-aos="fade-up" data-aos-delay="50">
                    <Link href={ctaLink} className={`btn btn-${ctaButtonColor}`}>{ ctaText }</Link>
                </div>
            </div>
        </section>
    )
}