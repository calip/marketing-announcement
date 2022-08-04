const filterItem = (data, searchTerm) => {
  
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return filtered
}

const Filter = {
  item: (item, term) => filterItem(item, term)
}

export default Filter