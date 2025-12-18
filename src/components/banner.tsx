import Image from "next/image";
import Link from "next/link";

type servicesData = {
    heading: string;
    text: string;
}
type toggleData = {
    title: string;
    imgPath: string;
    panelContent: {
        heading: string;
        services: servicesData []
    }
}
type BannerData = {
    title: string;
    text: string;
    ctaText: string;
    ctaButtonColor: string;
    ctaLink: string;
    backgroundImage: string;
    toggleSection: toggleData[];
}

export default function Banner({ data, handleActivePanel, activePanel } : { data: BannerData, handleActivePanel: (id: number) => void, activePanel: number}) {
    const { title, text, ctaText, ctaButtonColor, ctaLink, backgroundImage, toggleSection } = data; 
    const handleTab = (id: number) => {
        handleActivePanel(id);
    }

    const renderBannerToggles = () => {
        return (
            <div className="banner_toggles" data-aos="fade-up" data-aos-delay="150">
                <div className="container">
                    <div className="banner_toggles_row">
                        { toggleSection.map((detail, i) => (
                            <div className="banner_panel" key={i} onClick={() => handleTab(i)}>
                                <div className="banner_panel-hldr">
                                    <Image width={440} height={270} src={`/${detail.imgPath}`} alt=""/>
                                    <h3>{ detail.title }</h3>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        )
    }

    const renderTogglesSection = () => {
        return (
            <div className="banner_toggles_sec">
                <div className="container">
                    <div className="banner_toggles_hldr">
                        { 
                            toggleSection.map((detail, i) => (
                                activePanel == i && 
                                <div className={`banner_toggles_panel ${ activePanel == i ? "active" : "" }`} key={i}>
                                    <h3 data-aos="fade-up" data-aos-delay="0">{detail.panelContent.heading}</h3>
                                    {
                                        detail?.panelContent?.services.map( (service, ind) => (
                                            <div key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 0.5}>
                                                <Link href="/virtual-assistant">
                                                    <h4>{ service.heading }</h4>
                                                    <p>{service.text}</p>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            )) 
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className={` banner ${ toggleSection ? 'banner_withPanel' : ''} `}>
            <div className="banner_hldr">
                <div className="banner_image">
                    <Image
                        src={`/${backgroundImage}`}
                        width={1200}
                        height={600}
                        alt="banner image"
                    />
                </div>
                <div className="banner_text banner_text_overlay">
                    <h1 data-aos="fade-up" data-aos-delay="0">{title}</h1>
                    <p data-aos="fade-up" data-aos-delay="50">{text}</p>
                    <div className="banner_text_actions" data-aos="fade-up" data-aos-delay="100">
                        <Link href={ctaLink} className={`btn btn-${ctaButtonColor}`}>{ctaText}</Link>
                    </div>
                </div>
                { toggleSection && renderBannerToggles() }
            </div>

            { toggleSection && renderTogglesSection() }
        </section>
    )
}