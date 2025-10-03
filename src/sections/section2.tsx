import Image from "next/image"

export default function Section2() {
    return (
        <section className="ImageGridLayout"> 
            <div className="container">
                <div className="pill pill-tall pill-yellow pill-full">
                    <p>Just one minute a day will make your skin look healthier and younger</p>
                </div>
                <div className="ImageGridLayout_holder">
                    <div className="ImageGridLayout_text">
                        <h3>A simple routine that works</h3>
                        <p>A simple routine that works</p>
                        <ul className="checkList">
                            <li>Lightweight formulas</li>
                            <li>Easy to use formats</li>
                            <li>Clean Ingredients</li>
                            <li>Everything you need, nothing you don’t</li>
                        </ul>
                    </div>
                    <div className="ImageGridLayout_image">
                        <Image
                            src="/assets/logo.svg" 
                            alt="Logo"
                            width={568}
                            height={670}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}