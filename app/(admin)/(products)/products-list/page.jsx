import { DataTable } from '@/components/product/product-table';
import data from '@/api/data.json'


const ManageProducts = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-20">
      <div className="bg-neutral-900 sm:p-8 p-2 border border-neutral-800 rounded-md">
      <DataTable data={data} />
      </div>
    </div>
  )
}

export default ManageProducts;