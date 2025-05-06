import {
    AudioWaveform,
    BadgeDollarSign,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    SquareTerminal,
    Users,
  } from "lucide-react"


// This is sample data.
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Products Management",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Products List",
            url: "products-list",
          },
          {
            title: "Add Products",
            url: "#",
          },
          {
            title: "View Products",
            url: "view-products",
          },
        ],
      },
      {
        title: "Orders Management",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "All Orders",
            url: "manage-inventory",
          },
          {
            title: "Returns/Refunds ",
            url: "view-inventory",
          },
          {
            title: "Order Status",
            url: "#",
          },
        ],
      },
      {
        title: "Sales & Reports",
        url: "#",
        icon: BadgeDollarSign,
        items: [
          {
            title: "Sales Reports",
            url: "manage-inventory",
          },
          {
            title: "Tax Reports",
            url: "view-inventory",
          },
          {
            title: "Coupons & Discounts",
            url: "#",
          },
        ],
      },
      {
        title: "Customers Management",
        url: "#",
        icon: Users,
        items: [
          {
            title: "Customer List",
            url: "#",
          },
          {
            title: "Customer Feedback ",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }


  export const invoices = [
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

  