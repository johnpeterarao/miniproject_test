import Image from "next/image"

export default function Section2() {
    return (
        <section className="ImageGridLayout ImageGridLayout-2"> 
            <div className="container">
                <div className="pill pill-tall pill-yellow pill-full">
                    <p>Just <span className="underline">one minute</span> a day will make your skin look healthier and younger</p>
                </div>
                <div className="ImageGridLayout_holder">
                    <div className="ImageGridLayout_text">
                        <h3 className="heading_main">A simple routine that works</h3>
                        <p>Say goodbye to complicated skincare routines. Our mens' skincare line is designed for simplicity and effectiveness. With our lightweight formulas, you can achieve healthier and younger-looking skin with minimal effort. Perfect for guys who are new to skincare or just want to keep it simple.</p>
                        <ul className="checkList checkList_borderedTop">
                            <li>Lightweight formulas</li>
                            <li>Easy to use formats</li>
                            <li>Clean Ingredients</li>
                            <li>Everything you need, nothing you don’t</li>
                        </ul>
                    </div>
                    <div className="ImageGridLayout_image">
                        <Image
                            src="/assets/sec-2-img.png" 
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