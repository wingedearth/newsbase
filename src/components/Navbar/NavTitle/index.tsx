import { metadata } from "@/app/layout";
import Link from "next/link";

export const NavTitle = () => (
    <Link href="/" className="text-white text-2xl font-bold">
        {metadata.title}
    </Link>
);
