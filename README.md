# 📈 Stock Price Simulator API

A simple **Stock Price Simulator** project that simulates live stock prices and updates them every 3 seconds!  
It includes a **Node.js + TypeScript + Express** backend API and a **Vanilla HTML + JavaScript** frontend dashboard.

---

## 🔧 Backend Technologies
- Node.js
- TypeScript
- Express.js
- CORS
- ts-node-dev (for development)

---

## 🎨 Frontend Technologies
- HTML
- JavaScript (Fetch API)
- Live Server (`live-server` or `http-server`)

---

## 🛠️ Tools Used
- **Postman** → API testing
- **live-server** → Running frontend locally
- **Railway** → Backend deployment
- **Netlify** → Frontend deployment

---

## 🚀 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/stock-price-simulator.git
cd stock-price-simulator
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Run the Backend Server
```bash
npm run dev
```
> The backend will start at: `http://localhost:3000`

---

### 4. Run the Frontend (Dashboard)

You can use `live-server` or `http-server` to serve the frontend.

#### Install live-server globally (if not already)
```bash
npm install -g live-server
```

#### Start the frontend server
```bash
live-server frontend
```
> The frontend will be available at: `http://127.0.0.1:8080` (or whichever port live-server shows)

---

## 🌐 Deployment

- **Backend** hosted on [Railway.app](https://railway.app/)
- **Frontend** hosted on [Netlify](https://www.netlify.com/)

---

## 📂 Project Folder Structure

```
stock-price-simulator/
│
├── src/
│   └── index.ts          # Main backend server
│
├── frontend/
│   └── index.html        # Frontend page
│   └── script.js         # Fetch and update stock data
│
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

## 📢 Features
- Real-time simulated stock prices updating every 3 seconds
- REST API to fetch all stocks or a single stock
- Live frontend dashboard displaying stock data
- Smooth integration of backend and frontend
