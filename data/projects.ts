import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "smartgrahak-bill-calculator",
    number: "01",
    title: "SmartGrahak Bill Calculator",
    category: "Business Tool",
    description:
      "A billing and inventory management platform built for local grocery and kirana stores. It allows shopkeepers to create bills, download invoices, share them directly with customers, and manage products through a protected admin panel.",
    result:
      "Digital billing, inventory management, invoice generation and customer sharing in one lightweight system.",
    imageClass: "project-image-one",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Admin Panel",
      "jsPDF",
    ],
    imageURL: "/assets/bill_calculator.png",
    liveUrl: "https://bill.smartgrahak.in",
    featured: true,
  },

  {
    slug: "smartgrahak-e-store",
    number: "02",
    title: "SmartGrahak E-Store",
    category: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform designed to help customers discover products from local stores, manage carts and accounts, and interact with a modern online storefront.",
    result:
      "A complete e-commerce foundation with authentication, search, multilingual support, cart management and an admin dashboard.",
    imageClass: "project-image-two",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OAuth",
      "Redux",
      "i18n",
      "Admin Dashboard",
    ],
   imageURL: "/assets/e-store.png",
    liveUrl: "https://smartgrahak.in",
    featured: true,
  },

  {
    slug: "dryfruit-store-for-royals",
    number: "03",
    title: "Dryfruit Store for Royals",
    category: "Data-Driven Store",
    description:
      "A lightweight product-focused store experience built with Python and Streamlit, using data processing and image handling to present dry-fruit products.",
    result:
      "A simple data-driven storefront combining product presentation with Python-based data processing.",
    imageClass: "project-image-three",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "Pillow",
    ],
   imageURL: "/assets/dryfruitStore.png",
    liveUrl: "#",
    featured: true,
  },
];