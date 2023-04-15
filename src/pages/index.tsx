import Image from 'next/image'
import { Inter } from 'next/font/google'
import Kyu8 from "@/Codewars-TS/Kyu8";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Kyu8/>
    </main>
  )
}
