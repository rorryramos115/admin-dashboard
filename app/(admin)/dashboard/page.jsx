import Cards from "@/components/cards"
import { CardCharts } from "@/components/bar-chart"

import { TableDemo } from "@/components/tables"
import { PieChartsCard } from "@/components/pie-charts"


export default function Dashbaord(){

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

          <div className="grid xl:grid-cols-4 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-5 gap-4 mt-20">
              <Cards className="md:col-span-2 bg-neutral-900 border border-neutral-800"/>
              <Cards className="xl:col-start-1 row-start-2 bg-neutral-900 border border-neutral-800" />
              <Cards className="xl:col-start-2 md:row-start-2 row-start-3 bg-neutral-900 border border-neutral-800" />
              <CardCharts className="xl:col-start-3 xl:row-start-1 md:col-span-2 row-span-2  bg-neutral-900 border border-neutral-800" />
          </div>

          <div className="grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 grid-rows-2 gap-4">
            <PieChartsCard className="bg-gray-700" />
            <PieChartsCard className="xl:row-start-1 row-start-2 bg-gray-700" />
          </div>

          <div className="bg-neutral-900 md:p-8 p-4 rounded-md border border-neutral-800">
            <TableDemo />
          </div>

    </div>
  )
}
