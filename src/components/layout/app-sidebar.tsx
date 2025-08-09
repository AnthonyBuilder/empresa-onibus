import * as React from "react"

import { SearchForm } from '@/components/layout/search-form'
import { ProfileSwitcher } from '@/components/layout/profile-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

import { Routes, Route, Link } from "react-router"
import Empresas from "@/app/routes/empresas"
import SubEmpresas from "@/app/routes/subempresas"

const data = {
  navMain: [
    {
      title: "Principal",
      url: "#",
      items: [
        {
          title: "Empresas",
          url: "empresas",
          isActive: true,
          element: <Empresas/>
        },
        {
          title: "Sub-Empresas",
          url: "sub-empresas",
          element: <SubEmpresas/>
        },
      ],
    },
    {
      title: "Outros",
      url: "#",
      items: [
        {
          title: "Garagens",
          url: "#",
          element: null,
        },
        {
          title: "Linhas",
          url: "#",
          isActive: false,
          element: null,
        },
        {
          title: "Operações",
          url: "#",
          element: null,
        },
        {
          title: "Regiões",
          url: "#",
          element: null,
        },
        {
          title: "Usuarios",
          url: "#",
          element: null,
        }
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    
    <Sidebar {...props}>
      <SidebarHeader>
       <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Nome Empresa</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
