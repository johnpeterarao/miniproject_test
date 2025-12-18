import Image from "next/image";
import Link from "next/link";
import { Menus } from "@/constants/menu";


export default function Header() {
    return (
       <header className="header">
            <div className="header_main">
                <div className="container">
                    <div className="header_holder">
                        <div className="header_logo">
                            <Image
                                src="/snapdesk_logo.png" 
                                alt="Logo"
                                width={110}
                                height={110}
                            />
                        </div>
                        <div className="header_nav">
                            <ul>
                                { 
                                    Menus?.map((menu, i) => (
                                        <li key={i} className={`${menu.children.length ? "hasChildren" : ""}`}>
                                            { 
                                                !menu.children.length ? 
                                                    <Link href={menu.link} target={menu.opentab ? "_blank" : ""}>{ menu.title}</Link> 
                                                    : 
                                                    <>
                                                        <a className="hasChildren">{ menu.title}</a>
                                                        <div className="header_submenu">
                                                            <ul>
                                                                { menu.children.map((m, ind) => (
                                                                    <li key={ind}>
                                                                        <Link href={m.link} target={m.opentab ? "_blank" : ""}>{m.title}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                            }
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </header>
    )
}