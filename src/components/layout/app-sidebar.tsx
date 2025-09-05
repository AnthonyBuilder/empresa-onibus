import * as React from "react"

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
} from '@/components/ui/sidebar'

import { NavLink } from "react-router"
import Empresas from "@/app/routes/empresas"
import SubEmpresas from "@/app/routes/subempresas"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Separator } from "../ui/separator"

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
          element: <Empresas />
        },
        {
          title: "Sub-Empresas",
          url: "sub-empresas",
          element: <SubEmpresas />
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
        },
        {
          title: "Rankings",
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
          <h2 className="text-xl font-bold p-2">Teleconsult</h2>
        </div>

      </SidebarHeader>
      <Separator
        orientation="horizontal"
        className="mt-1 data-[orientation=vertical]:h-max"
      />
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <NavLink to={item.url} end>{item.title}</NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

              </SidebarMenu>

            </SidebarGroupContent>

          </SidebarGroup>
        ))}

        {/* popup button message from user */}
        <Dialog>
          <DialogTrigger className="m-5 justify-self-end">Mensagem</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Titulo</DialogTitle>
              <DialogDescription className="mt-5">
                Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta
                e removerá seus dados de nossos servidores.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </SidebarContent>
    </Sidebar>
  )
}
