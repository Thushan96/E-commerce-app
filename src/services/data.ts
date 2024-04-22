// Sidebar imports
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { FcSalesPerformance, FcRules, FcMoneyTransfer } from "react-icons/fc";

export const SidebarData = [
  {
    icon: AiOutlineDashboard,
    heading: "Dashboard",
  },
  {
    icon: AiOutlineShoppingCart,
    heading: "Orders",
  },
  {
    icon: MdOutlinePeopleAlt,
    heading: "Customers",
  },
  {
    icon: BsBoxes,
    heading: "Products",
  },
  {
    icon: AiOutlineAreaChart,
    heading: "Analytics",
  },
];

export const products = [
  {
    productId: "1",
    name: "Laptop",
    quantity: 5,
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "2",
    name: "Wireless Headphones",
    quantity: 10,
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606221793073-1e3b79689777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    productId: "3",
    name: "Smartwatch",
    quantity: 8,
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1615834569398-4cc6036929f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1638095562082-449d8c5a47b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1574678564017-64f2a1543dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    productId: "4",
    name: "Gaming Mouse",
    quantity: 15,
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631749352438-7d576312185d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "5",
    name: "Tablet",
    quantity: 3,
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680371834034-f1f210e14f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680371834158-35037f8e55d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "6",
    name: "Noise-Cancelling Headphones",
    quantity: 7,
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1593121730005-0b297cfc7681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE5vaXNlJTIwQ2FuY2VsbGluZyUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590658165737-15a047b7c0b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fE5vaXNlJTIwQ2FuY2VsbGluZyUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1677086813101-496781a0f327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fE5vaXNlJTIwQ2FuY2VsbGluZyUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    productId: "7",
    name: "Fitness Tracker",
    quantity: 12,
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZpdG5lc3MlMjBUcmFja2VyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    productId: "8",
    name: "Mechanical Keyboard",
    quantity: 4,
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1558050032-160f36233a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "9",
    name: "Portable Speaker",
    quantity: 6,
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9ydGFibGUlMjBTcGVha2VyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1617766376513-148515e5d3b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBvcnRhYmxlJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fFBvcnRhYmxlJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    productId: "10",
    name: "VR Headset",
    quantity: 2,
    price: 399.99,
    images: [
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VlIlMjBIZWFkc2V0fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1710167120662-52571d5a9c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFZSJTIwSGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1710167120677-318f8a50859c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFZSJTIwSGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    productId: "11",
    name: "Silicone Back Cover (Black)",
    quantity: 20,
    price: 9.99,
    images: [
      "https://images.unsplash.com/photo-1625102217544-a096a17018f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBob25lJTIwQ292ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1611764816781-341bebad70f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611120159972-050e0fbb7ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    ],
  },
  {
    productId: "12",
    name: "Laptop",
    quantity: 15,
    price: 14.99,
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "13",
    name: "Wireless Headphones",
    quantity: 18,
    price: 7.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606221793073-1e3b79689777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    productId: "14",
    name: "Smartwatch",
    quantity: 10,
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1615834569398-4cc6036929f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1638095562082-449d8c5a47b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1574678564017-64f2a1543dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    productId: "15",
    name: "Gaming Mouse",
    quantity: 8,
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631749352438-7d576312185d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "16",
    name: "Tablet",
    quantity: 3,
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680371834034-f1f210e14f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680371834158-35037f8e55d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHRhYmxldCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    ],
  },
  {
    productId: "17",
    name: "External Hard Drive",
    quantity: 12,
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFyZCUyMERyaXZlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613826591816-1b80e944fc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhhcmQlMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1549299096-56b3ebc3259a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEhhcmQlMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
];


