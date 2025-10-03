import Image from "next/image";


export default function Header() {
    return (
       <header className="header">
            <div className="thinbar">
                <div className="container">
                    <p>free shipping on us orders over $100</p>
                </div>
            </div>
            <div className="header_main">
                <div className="container">
                    <div className="header_holder">
                        <div className="header_left">
                            <div className="header_burger">
                                <Image
                                    src="/assets/burgerMenu.svg" 
                                    alt="Logo"
                                    width={32}
                                    height={22}
                                />
                            </div>
                            <div className="header_logo">
                                <Image
                                    src="/assets/logo.svg" 
                                    alt="Logo"
                                    width={42}
                                    height={55}
                                />
                            </div>
                        </div>
                        <div className="header_right">
                            <button className="btn btn-dark">Get Started</button>
                            <div className="header_cart">
                                <Image
                                    src="/assets/cart-icon.png" 
                                    alt="Logo"
                                    width={37}
                                    height={33}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </header>
    )
}