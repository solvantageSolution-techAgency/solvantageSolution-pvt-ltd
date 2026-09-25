import type { Project } from "../types";

export const projects: Project[] = [
   {
    slug: "mehta-Cares",
    number: "04",
    title: "Dr. Mehta Clinic",
    category: "medical care centre",
    description:
      "Mehta cares is a medical care centre which provides its clients not only consulting opportinity but also educate them . ",
    result:
      "A complete medical care centre with landing page, get instant appointment ,about  ,treatement , and contact page. provide the facility to connect directely to doctor via email ",
    imageClass: "project-image-two",
    tags: [
      "nextJS",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwing/postcss",
      "emailing service",
    ],
    imageURL: "/assets/mehtaclinic.png",
    liveUrl: "https://docter-mehta-clinic-portfolio-site.vercel.app/",
    featured: true,
  },
  {
    slug: "Guruji-Academy",
    number: "05",
    title: "Guruji Academy",
    category: "Army Coaching Centre",
    description:
      "Guruji Academy is a Army education coaching centre centre which provides its student not only consulting opportinity but also educate them . ",
    result:
      "A complete academin coaching centre with landing page, enquiry page ,about , defence classes, library section , hostel , facilities , and contact page. provide the facility to connect directely to doctor via email ",
    imageClass: "project-image-two",
    tags: [
      "nextJS",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwing/postcss",
      "emailing service",
    ],
    imageURL: "/assets/acedemy.png",
    liveUrl: "https://guru-ji-sarsaul.netlify.app",
    featured: true,
  },
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
    featured: false,
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
    featured: false,
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
    imageURL: "/assets/dryFruitStore.png",
    liveUrl: "#",
    featured: true,
  },
 


];