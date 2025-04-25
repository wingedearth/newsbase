import { navlinks } from "../constants";
import { Navlink } from "../Navlink";

export const Navlinks = () => (
    <ul className="flex space-x-6">
        {navlinks.map((link, index) => (
            <Navlink {...link} key={`navbar-link-${index}`} />
        ))}
    </ul>
);
