import Toggle from "./Toggle"

const Searchbar = ({setSearchTerm, searchTerm}) => {
  const handleFilter = (e) => {
    setSearchTerm(e.target.value)
  };
  return(
    <div className="searchbar">
      <div className="search">
          <input
            autoFocus
            value={searchTerm}
            onChange={handleFilter}
          />
      </div>
      <Toggle />
    </div>
  ) 
}
  
export default Searchbar