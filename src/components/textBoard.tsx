import Link from "next/link";

type textBoard = {
    title: string;
    ctaText: string;
    ctaButtonColor: string;
    ctaLink: string
}

export default function TextBoard({ data } : { data: textBoard }) {
    const { title, ctaText, ctaButtonColor, ctaLink } = data;

    return (
        <section className="textBoard">
            <div className="container">
                <div className="textBoard_panel">
                    <h3 dangerouslySetInnerHTML={{ __html: title }} data-aos="fade-up" data-aos-delay="0"></h3>
                    <div className="textBoard_actions" data-aos="fade-up" data-aos-delay="50">
                        <Link href={ctaLink} className={`btn btn-${ctaButtonColor}`}>{ ctaText }</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}