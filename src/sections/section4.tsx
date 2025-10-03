import Image from "next/image"

export default function Section4() {
    return (
        <section className="imageCard_sec">
            <div className="container">
                <div className="imageCard_intro">
                    <div className="imageCard_caption">Heres how D1 works</div>
                    <Image
                        src="/assets/clock.svg" 
                        alt="Logo"
                        width={110}
                        height={110}
                        className="imageCard_intro-icon"
                    />
                    <h2 className="heading_main">Just 1 minute a day</h2>
                </div>
                <ol className="imageCard_list">
                    <div className="imageCard_card">
                        <div className="imageCard_card-portrait">
                            <Image
                                src="/assets/sec-4.jpg" 
                                alt="Logo"
                                width={333}
                                height={480}
                            />
                        </div>
                        <div className="imageCard_card_details">
                            <Image
                                src="/assets/product/cleanser.png" 
                                alt="Logo"
                                width={60}
                                height={82}
                                className="imageCard_card_thumb"
                            />
                            <h4>Wash your face with our Bamboo Charcoal Cleanser</h4>
                        </div>
                    </div>
                    <div className="imageCard_card">
                        <div className="imageCard_card-portrait">
                            <Image
                                src="/assets/sec-4.jpg" 
                                alt="Logo"
                                width={333}
                                height={480}
                            />
                        </div>
                        <div className="imageCard_card_details">
                            <Image
                                src="/assets/product/mositurizer.png" 
                                alt="Logo"
                                width={60}
                                height={82}
                                className="imageCard_card_thumb"
                            />
                            <h4>Apply a dime size amount of All Day Moisturizer evenly to your face</h4>
                        </div>
                    </div>
                    <div className="imageCard_card">
                        <div className="imageCard_card-portrait">
                            <Image
                                src="/assets/sec-4.jpg" 
                                alt="Logo"
                                width={333}
                                height={480}
                            />
                        </div>
                        <div className="imageCard_card_details">
                            <Image
                                src="/assets/product/stick.png" 
                                alt="Logo"
                                width={60}
                                height={82}
                                className="imageCard_card_thumb"
                            />
                            <h4>Apply small amount of our Eye Cream under your eyes and around the sides</h4>
                        </div>
                    </div>
                </ol>
            </div>
        </section>
    )
}