"use client"

import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Contant from "./components/Contant";

import React, { useEffect } from "react";
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [setTheme])

  return (
    <div className="home">
      <FilterBar />
      <div className='container'>
        <SearchBar />
        <Contant />
      </div>
    </div>
  )
}
