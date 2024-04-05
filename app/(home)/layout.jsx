import { Inter } from "next/font/google";
import "../../style/globals.scss";
import Header from "@/components/header/header";


export default function HomeLayout({ children }) {
  return <>
  <Header/>
  {children}</>;
}
