'use client'
import dbConnect from "@/db/mongodb";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Home() {
  const {currentUser} = useSelector(state => state.user)
  dbConnect()
  return (
    <main >
      <div className="main">
      <h2>Quiz app</h2>
      <Link href="/quiz">
        <button className="btn">Start quiz</button>
      </Link>
      </div>
      
    </main>
  );
}
