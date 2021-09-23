import { useState } from "react";

interface IImage {
    icon: string;
    altText: string;
}

const Navbar = (props: IImage) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleClick = () => setNavbarOpen(!navbarOpen);

    return (
        <nav className="flex flex-row items-center justify-between p-5 bg-black">
            <div className="flex flex-col flex-wrap">
                <div className="flex md:hidden">
                    <button className="flex" onClick={handleClick}>
                        <div className={"relative block tham tham-e-squeeze tham-w-8 " + (navbarOpen ? "tham-active": "")}>
                            <div className="relative tham-box">
                                <div className="relative bg-white tham-inner" />
                            </div>
                        </div>
                    </button>
                </div>
                <div className={"md:flex flex-grow items-center bg-purple-501 w-full" + (navbarOpen ? "" : " hidden")}>
                    <ul className="absolute flex flex-col mt-5 list-none bg-black rounded md:flex-row md:ml-auto">
                        <li className="nav-item">  
                            <a href="/" className="block px-3 py-3 text-2xl text-white border-b-2 border-none rounded md:inline-block hover:bg-purple-500">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Blog" className="block px-3 py-3 text-2xl text-white border-b-2 border-none rounded md:inline-block hover:bg-purple-500">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Contact" className="block px-3 py-3 text-2xl text-white border-b-2 border-none rounded md:inline-block hover:bg-purple-500">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={props.icon} alt={props.altText} style={{height: 79}} />
        </nav>
    );
}

export default Navbar;
