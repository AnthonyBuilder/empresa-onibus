import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Separator } from "@radix-ui/react-separator"

import { ProfileSwitcher } from "./profile-switcher"
import { Outlet } from "react-router"


var viewName = "Empresas"


const data = {
    profilesName: ["Gustavo", "Anthony"],
}

export default function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <h2 className="text-lg font-semibold">{viewName}</h2>

                    <div className="flex-1 max-w-fit ml-auto">
                        <ProfileSwitcher
                            profilesName={data.profilesName}
                            defaultProfileName={data.profilesName[0]}
                        />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-1 flex-col">
                        <Outlet />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
