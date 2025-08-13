"use client"

import * as React from "react"
import { Check, ChevronsUpDown, PersonStanding } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link, Navigate, NavLink } from "react-router"

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button"


export function ProfileSwitcher({
  profilesName,
  defaultProfileName,
}: {
  profilesName: string[]
  defaultProfileName: string
}) {
  const [selectedProfileName, setSelectedProfileName] = React.useState(defaultProfileName)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <PersonStanding className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-bold">Admin</span>
                <span className="font-light">{selectedProfileName}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {profilesName.map((name) => (
              <DropdownMenuItem
                key={name}
                onSelect={() => setSelectedProfileName(name)}
              >
                {name}{" "}
                {name === selectedProfileName && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}

              <div className="justify-self-end m-3">
                <NavLink to="/login">
                <h2 className="text-end font-bold">
                  Login
                </h2>
              </NavLink>

              </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
