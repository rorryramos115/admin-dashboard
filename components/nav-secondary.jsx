"use client"

import * as React from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "./ui/separator"
import Link from "next/link"

export function NavSecondary({ items, ...props }) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.title === "Search" ? (
                <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                  <DialogTrigger asChild>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] border border-neutral-800">
                    <DialogHeader>
                      <DialogTitle>Search</DialogTitle>
                    </DialogHeader>
                     <div>
                     <Input id="name" type='text' className="col-span-3"/>
                     <Separator className='my-5 bg-gray-700' />
                      <div className="flex flex-col">
                        <span className="py-2 px-4 hover:bg-neutral-800 rounded-lg cursor-pointer">Dashboard</span>
                        <span  className="py-2 px-4 hover:bg-neutral-800 rounded-lg cursor-pointer">Product</span>
                        <span  className="py-2 px-4 hover:bg-neutral-800 rounded-lg cursor-pointer">Orders</span>
                        <span  className="py-2 px-4 hover:bg-neutral-800 rounded-lg cursor-pointer">Sales/Report</span>
                      </div>
                     </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}