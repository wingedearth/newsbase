import Link from "next/link";
import { NavlinkProps } from "./Navlink.types";

export const Navlink = ({ href, title }: NavlinkProps) => {
    return (
        <li>
            <Link href={href} className="text-white hover:text-blue-200">
              {title}
            </Link>
          </li>
    )
};
