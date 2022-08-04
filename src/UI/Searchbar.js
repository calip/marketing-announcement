import InputDebounce from "../Bloc/InputDebounce"
import Toggle from "./Toggle"

const Searchbar = ({setSearchTerm}) => {
  const handleFilter = (value) => {
    setSearchTerm(value)
  }

  return(
    <div className="searchbar">
      <div className="search">
          <InputDebounce
            placeholder="Search Title or Description"
            onChange={handleFilter}
          />
      </div>
      <Toggle />
    </div>
  ) 
}
  
export default Searchbar