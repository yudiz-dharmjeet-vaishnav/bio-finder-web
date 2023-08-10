"use client"

import React from "react";
import Script from 'next/script'

import FilterBar from "@/app/components/Home/FilterBar";
import SearchBar from "@/app/components/Home/SearchBar";
import Contant from "@/app/components/Home/Contant";

import ThemeScript from '@/app/themeScript'

export default function Home() {
  return (
    <div className="home">
      <FilterBar />
      <div className='container'>
        <SearchBar />
        <Contant />
      </div>
      <Script src={ThemeScript} />

    </div>
  )
}
