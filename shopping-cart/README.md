# 🛒 React + Vite Shopping Cart

A sleek shopping cart web app built with **React**, **Vite**, and **TailwindCSS**, inspired by a Figma UI and powered by a custom REST API. Built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.

🔗 **Live Demo**: [View Deployed App](https://shopping-cart-qu53.vercel.app/)
![image](https://github.com/user-attachments/assets/36044fa9-993b-4842-9c9a-2e4b586cd752)
![image](https://github.com/user-attachments/assets/b2c5da02-913c-4241-a29b-e544da2279c2)

---

## 🎯 Features

- 🏠 Modern homepage inspired by real-world furniture layouts
- 🛍️ Shop page with dynamic product fetching
- ➕ Add-to-cart with quantity controls (increment, decrement, manual input)
- 🧠 Global cart state using React Context
- 🧭 Page navigation with React Router v7
- 💅 Fully styled using TailwindCSS
- 🌐 Deployed via Vercel

---

## 🪑 Powered by the Furniture API

This project uses the [Furniture API](https://furniture-api.fly.dev) — a robust REST API with:

- Real-time stock & discount support
- AI-generated product content & images
- Advanced filtering (category, wood type, finish, price, stock)
- Dynamic pricing and feature toggles

Example Endpoint:  
`GET https://furniture-api.fly.dev/v1/products?category=chair&wood_type=oak&max_price=500&sort=price_asc`

---
![image](https://github.com/user-attachments/assets/99e9e120-a6fd-43f4-8243-67694ddd2770)

## 🖼️ UI Inspiration

Based on the [**Panto Furniture Landing Page** Figma template](https://www.figma.com/community/file/1061732519182077733/panto-furniture-landing-page-design).

> Credit to the original Figma designer for this aesthetic foundation.

---

## 🧱 Project Structure

shopping-cart/
├── public/
│ └── index.html
├── src/
│ ├── components/ # Reusable UI components (cards, buttons, etc.)
│ ├── context/ # Cart and inventory context
│ ├── pages/ # Home.jsx, Shop.jsx
│ ├── App.jsx # React Router setup
│ └── main.jsx # App entry
├── vercel.json # SPA routing config for Vercel
├── vite.config.js
├── package.json
└── README.md


---

## 🛠️ Tech Stack

| Tech            | Purpose                          |
|-----------------|----------------------------------|
| React 19        | UI & state management            |
| Vite 7          | Build tool & dev server          |
| Tailwind CSS 4  | Utility-first styling            |
| React Router 7  | Page navigation                  |
| React Context   | Global cart state                |
| Furniture API   | Live product catalog             |
| Vercel          | Hosting and deployment           |

---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/monroeaustin/shopping-cart.git
   cd shopping-cart


🧠 Lessons Learned
Managing global state via React Context

Handling API data dynamically with fetch & async logic

Implementing input-controlled components for UX

Routing + deployment config for SPAs

Translating Figma designs into clean components

🔮 Future Plans
LocalStorage support for persistent cart

Sorting & filtering options in the UI

Improved mobile responsiveness

Checkout simulation or Stripe test integration

Test coverage with React Testing Library

📄 License
This project is for educational purposes under The Odin Project curriculum.
Furniture API provided publicly via furniture-api.fly.dev

Built & designed by Monroe Austin with ♥️
