import * as React from "react"

import { SearchForm } from '@/components/layout/search-form'
import { VersionSwitcher } from '@/components/layout/version-switcher'
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

// This is sample data.
const data = {
  versions: ["Gustavo", "Anthony", "Roberto"],
  navMain: [
    {
      title: "Principal",
      url: "#",
      items: [
        {
          title: "Empresas",
          url: "#",
        },
        {
          title: "Sub-Empresas",
          url: "#",
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
        },
        {
          title: "Linhas",
          url: "#",
          isActive: true,
        },
        {
          title: "Operações",
          url: "#",
        },
        {
          title: "Regiões",
          url: "#",
        },
        {
          title: "Usuarios",
          url: "#",
        }
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
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
                      <a href={item.url}>{item.title}</a>
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
