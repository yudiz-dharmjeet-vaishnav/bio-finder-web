import React from "react";

import FilterBar from "@/src/shared/components/Home/FilterBar";
import SearchBar from "@/src/shared/components/Home/SearchBar";
import Contant from "@/src/shared/components/Home/Contant";

export default function Home() {
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