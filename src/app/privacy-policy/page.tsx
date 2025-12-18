import { PrivacyPolicyData } from "@/constants/privacy-policy";

export default function PrivacyPolicy() {
    return (
        <section className="contentPage">
            <div className="container">
                <h1 data-aos="fade-up" data-aos-delay="0">{ PrivacyPolicyData?.title }</h1>
                <div data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: PrivacyPolicyData.body }}></div>
            </div>
        </section>
    )
}