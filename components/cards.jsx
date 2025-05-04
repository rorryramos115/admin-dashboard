

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DollarSign } from "lucide-react";

const Cards = ({className}) => {
  return (
   <Card className={`${className}`}>
        <CardHeader className='text-3xl font-semibold'>
            <div className="flex items-center justify-between">
               Earnings

               <span className="p-2 bg-gray-700 rounded-full"><DollarSign /></span>
            </div>
        </CardHeader>

        <CardFooter className='text-xl font-semibold flex items-end h-full'>
            <div className="flex flex-col">
                    $39, 200.50
                    <span className='text-base text-gray-400 font-normal'>Montly Reviniew</span>
            </div>
        </CardFooter>
   </Card>
  )
}

export default Cards;