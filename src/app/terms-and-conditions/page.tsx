import { termsAndConditions } from "@/constants/terms-and-conditions"

export default function TermsAndConditions() {
    return (
        <section className="contentPage">
            <div className="container">
                <h1 data-aos="fade-up" data-aos-delay="0">{ termsAndConditions.title }</h1>
                <div data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: termsAndConditions.body }}></div>
            </div>
        </section>
    )
}