import Image from "next/image";
import { GetStartedBannerData, GetStartedBoardData, FlexiblePackageData, HowItWorksData } from "@/constants/get-started";

export default function GetStarted() {
    return (
        <>
            <section className="banner banner_hero banner_hero--va">
                <div className="banner_hldr">
                    <div className="banner_image">
                        <Image
                            src={`/${GetStartedBannerData?.image}`}
                            width={1200}
                            height={600}
                            alt="banner image"
                        />
                    </div>
                    <div className="banner_text">
                        <div className="container">
                            <div className="banner_text_container">
                                <h1 data-aos="fade-up" data-aos-delay="0">{GetStartedBannerData?.title}</h1>
                                <p data-aos="fade-up" data-aos-delay="50">{GetStartedBannerData?.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="boardPanel_sec">
                <div className="container">
                    { 
                        GetStartedBoardData?.map((board, ind) => (
                            <div className="boardPanel_board" key={ind} data-aos="fade-up" data-aos-delay="0">
                                <div className="boardPanel_board_count" >
                                    { ind + 1 }
                                </div>
                                <div className="boardPanel_board_header">
                                    <h3>{ board.title }</h3>
                                </div>
                                <div className="boardPanel_board_body" dangerouslySetInnerHTML={{ __html: board.body }}></div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="flexPackage_sec">
                <div className="container">
                    <div className="flexPackage_intro" data-aos="fade-up" data-aos-delay="0">
                        <h3>{ FlexiblePackageData?.title }</h3>
                        <p>{ FlexiblePackageData?.excerpt }</p>
                    </div>
                    <div className="flexPackage_hldr">
                        <div className="flexPackage_img">
                            <Image
                                src={`/${FlexiblePackageData?.image}`}
                                alt="Logo"
                                width={450}
                                height={380}
                            />
                        </div>
                        <div className="flexPackage_panels">
                            { 
                                FlexiblePackageData?.rates?.map((rate, ind) => (
                                    <div className="flexPackage_panel" key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50}>
                                        <h5> {rate.title} </h5>
                                        <ul>
                                            {
                                                rate?.details?.map((detail, i) => (
                                                <li key={i}>
                                                    { detail }
                                                </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="howItWorks_sec">
                <div className="container">
                    <div className="howItWorks_intro" data-aos="fade-up" data-aos-delay="0">
                        <h3>{HowItWorksData?.title}</h3>
                    </div>
                    <div className="howItWorks_row">
                        {
                            HowItWorksData.cardsData.map((card, ind) => (
                                <div className="howItWorks_col" key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50} >
                                    <div className="howItWorks_card">
                                        <div className="howItWorks_card_img">
                                            <Image
                                                src={`/${card.img}`}
                                                alt="Logo"
                                                width={390}
                                                height={390}
                                            />
                                        </div>
                                        <div className="howItWorks_card_text">
                                            <h4>{card.title}</h4>
                                            <p>{card.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="howItWorks_outro" dangerouslySetInnerHTML={{ __html: HowItWorksData.outro }} data-aos="fade-up" data-aos-delay="50"></div>
                    <div className="howItWorks_actions" data-aos="fade-up" data-aos-delay="100">
                        <a href={HowItWorksData?.buttonLink} className={`btn btn-${HowItWorksData.buttonColor}`}>{ HowItWorksData.buttonText }</a>
                    </div>
                </div>
            </section>
        </>
    )
}