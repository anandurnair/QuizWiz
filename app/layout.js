"use client";
import { Inter } from "next/font/google";
import "../style/globals.scss";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      {/* </PersistGate> */}
    </Provider>
  );
}


