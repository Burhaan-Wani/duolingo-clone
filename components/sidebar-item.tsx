"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};
export const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="h-[52px] justify-start"
            asChild
        >
            <Link href={href}>
                <Image
                    className="mr-5"
                    src={iconSrc}
                    alt={label}
                    height={32}
                    width={32}
                />
                {label}
            </Link>
        </Button>
    );
};
