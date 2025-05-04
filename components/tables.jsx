import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
  
  const invoices = [
    {
      invoice: "INV001",
      name: "Rorry Ramos",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      name: "Rorry Ramos",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      name: "Rorry Ramos",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      name: "Rorry Ramos",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      name: "Rorry Ramos",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      name: "Rorry Ramos",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      name: "Rorry Ramos",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  function getBadgeColor(status) {
    switch (status) {
      case "Paid":
        return "bg-green-600";
      case "Pending":
        return "bg-sky-600";
      case "Unpaid":
        return "bg-gray-600";
      default:
        return "bg-gray-400";
    }
  }
  
  
  export function TableDemo() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Invoice</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium p-4">{invoice.invoice}</TableCell>
              <TableCell>{invoice.name}</TableCell>

              <TableCell>
                <Badge className={`text-neutral-100 ${getBadgeColor(invoice.paymentStatus)}`}>
                    {invoice.paymentStatus}
                </Badge></TableCell>

              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  