import { ReactElement } from "react";
import { FaHome } from "react-icons/fa";
import { IoChatbubble, IoInformation } from "react-icons/io5";

export type navItem = {
    name: string;
    link: string;
    icon?: ReactElement;
}

export const navItems: navItem[] = [
    {
        name: "Home",
        link: "/",
        icon: <FaHome />,
    },
    {
        name: "About",
        link: "/about",
        icon: <IoInformation />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: <IoChatbubble />,
    },
]