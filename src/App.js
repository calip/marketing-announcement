
import React, { useEffect } from 'react';
import './App.css';
import Filter from './Bloc/Filter';
import Service from './Service/Service';
import Breadcrumb from './UI/Breadcrumb';
import Header from './UI/Header';
import Card from './UI/Card';
import Searchbar from './UI/Searchbar';


function App() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [results, setResults] = React.useState([])
  const [filteredResults, setFilteredResults] = React.useState([])

  useEffect(() => {
    Service.getData().then(result => setResults(result));
  }, [])

  useEffect(() => {
    const filterResults = Filter.item(results, searchTerm)
    setFilteredResults(filterResults)
  }, [searchTerm, results])

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Breadcrumb />
        <Searchbar setSearchTerm={setSearchTerm}/>
        <div className="cards">
          {filteredResults.map(( item , i) => {
            return (
              <Card key={i} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
