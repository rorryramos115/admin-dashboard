import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
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
        url: "/",
        icon: SquareTerminal,
        isActive: true,
        // items: [
        //   {
        //     title: "History",
        //     url: "#",
        //   },
        //   {
        //     title: "Starred",
        //     url: "#",
        //   },
        //   {
        //     title: "Settings",
        //     url: "#",
        //   },
        // ],
      },
      {
        title: "Products",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "manage products",
            url: "manage-products",
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
        title: "Inventory",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Manage Inventory",
            url: "manage-inventory",
          },
          {
            title: "View Inventory",
            url: "view-inventory",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
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
  