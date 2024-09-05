import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import React from "react";

type Props = {
    children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
                <div className="h-full bg-red-500">{children}</div>
            </main>
        </>
    );
};

export default MainLayout;
