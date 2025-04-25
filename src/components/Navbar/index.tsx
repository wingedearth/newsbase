import { Navlinks } from "./Navlinks";
import { NavTitle } from "./NavTitle";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavTitle />
        <Navlinks />
      </div>
    </nav>
  );
};
