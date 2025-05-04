import { AppSidebar } from "@/components/app-sidebar"
import Cards from "@/components/cards"
import { CardCharts } from "@/components/bar-chart"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

        <div className="grid xl:grid-cols-4 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-5 gap-4">
            <Cards className="md:col-span-2 bg-neutral-900 border border-neutral-800"/>
            <Cards className="xl:col-start-1 row-start-2 bg-neutral-900 border border-neutral-800" />
            <Cards className="xl:col-start-2 md:row-start-2 row-start-3 bg-neutral-900 border border-neutral-800" />
            <CardCharts className="xl:col-start-3 xl:row-start-1 md:col-span-2 row-span-2  bg-neutral-900 border border-neutral-800" />
        </div>

          <div className="bg-gray-700 h-[450px]" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
