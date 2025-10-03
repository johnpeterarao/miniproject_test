import Image from "next/image"

export default function Section3() {
    return (
        <section className="circleImg_section">
            <div className="container">
                <div className="circleImg_panel">
                    <div className="circleImg_holder circleImg_holder-3">
                        <div className="circleImg_card">
                            <div className="circleImg_card-img">
                                <Image
                                    src="/assets/circled-img.png" 
                                    alt="Logo"
                                    width={135}
                                    height={135}
                                />
                            </div>
                            <div className="circleImg_card-text">
                                <h4>Cutting-edge Korean Skincare Technology</h4>
                            </div>
                        </div>
                        <div className="circleImg_card">
                            <div className="circleImg_card-img">
                                <Image
                                    src="/assets/circled-img.png" 
                                    alt="Logo"
                                    width={135}
                                    height={135}
                                />
                            </div>
                            <div className="circleImg_card-text">
                                <h4>Science-backed Ingredients</h4>
                            </div>
                        </div>
                        <div className="circleImg_card">
                            <div className="circleImg_card-img">
                                <Image
                                    src="/assets/circled-img.png" 
                                    alt="Logo"
                                    width={135}
                                    height={135}
                                />
                            </div>
                            <div className="circleImg_card-text">
                                <h4>Dematologically Tested</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}