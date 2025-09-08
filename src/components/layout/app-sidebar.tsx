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
import Rankings from "@/app/routes/rankings"
import Usuarios from "@/app/routes/usuarios"
import Linhas from "@/app/routes/linhas"
import Operacoes from "@/app/routes/operacoes"
import Regioes from "@/app/routes/regioes"
import Garagens from "@/app/routes/garagens"

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
          url: "garagens",
          element: <Garagens />,
        },
        {
          title: "Linhas",
          url: "linhas",
          isActive: false,
          element: <Linhas/>,
        },
        {
          title: "Operações",
          url: "operacoes",
          element: <Operacoes />,
        },
        {
          title: "Regiões",
          url: "regioes",
          element: <Regioes />  ,
        },
        {
          title: "Usuarios",
          url: "usuarios",
          element: <Usuarios/>,
        },
        {
          title: "Rankings",
          url: "rankings",
          element: <Rankings />,
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
