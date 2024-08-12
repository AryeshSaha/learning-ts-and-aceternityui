import { navItem } from "@/lib/definitions";
import { FaHome } from "react-icons/fa";
import { IoChatbubble, IoInformation } from "react-icons/io5";

const navItems: navItem[] = [
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
];

export default navItems;
