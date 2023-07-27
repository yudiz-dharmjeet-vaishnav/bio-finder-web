import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Contant from "./components/Contant";

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
