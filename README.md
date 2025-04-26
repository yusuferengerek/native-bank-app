# Native Bank App

A simple **React Native** bank app built with **Expo Router**, **NativeWind**, and **TailwindCSS**.  
This project allows users to view their balance, track transactions, and navigate through different tabs like Home, History, Settings, and more.

## ✨ Features

- View account balance, expenses, and incomes
- History of transactions
- Profile and settings tabs
- Responsive design with TailwindCSS (NativeWind)
- Utility functions for currency formatting and calculations
- Smooth navigation with React Navigation
- Developed using Expo for easy cross-platform deployment

## 🛠 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [NativeWind (TailwindCSS for React Native)](https://www.nativewind.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```
app/
 ├── (tabs)/         # Tab screens: Home, History, Settings
 ├── _layout.tsx     # Main app layout
 ├── globals.css     # Global styles
 └── index.tsx       # Entry point for the router

data/
 ├── profile.ts      # User profile data
 └── transactions.ts # Mock transaction data

utils/
 ├── calculateBalance.ts
 ├── calculateExpenses.ts
 ├── calculateIncomes.ts
 └── formatCurrency.ts
```

## 📸 Screenshots

### 🏠 Home Screen
<div align="center">
  <img src="./screenshots/home.png" alt="Home Screen" width="300"/>
</div>

> Displays the current balance, card overview, and quick actions.

---

### 📜 History Screen
<div align="center">
  <img src="./screenshots/history.png" alt="History Screen" width="300"/>
</div>

> Shows a list of past transactions with details like date, amount, and type.

---

### ⚙️ Settings Screen
<div align="center">
  <img src="./screenshots/settings.png" alt="Settings Screen" width="300"/>
</div>

> Allows users to manage preferences and account settings.

---

### 💳 Card Details Screen
<div align="center">
  <img src="./screenshots/card-details.png" alt="Card Details Screen" width="300"/>
</div>

> Displays detailed information about the selected bank card, including balance and transaction limits.

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/native-bank-app.git
cd native-bank-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
npm start
```

Then use the Expo Go app on your device or an emulator to view the app.

## 🔥 Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run the app on Android
- `npm run ios` - Run the app on iOS
- `npm run web` - Run the app in the web browser
- `npm run lint` - Lint the code
- `npm run test` - Run tests

## 📦 Dependencies

Main libraries used:

- Expo
- React Native
- Expo Router
- NativeWind
- React Navigation
- TailwindCSS
- TypeScript
- Jest (for testing)

## 📄 License

This project is licensed under the MIT License.
