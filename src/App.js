
import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './Bloc/Filter';
import Service from './Service/Service';
import Breadcrumb from './UI/Breadcrumb';
import Header from './UI/Header';
import Card from './UI/Card';
import Searchbar from './UI/Searchbar';
import Loader from './UI/Loader';


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [isSelected, setisSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Service.getData().then(result => 
      {
        setResults(result)
        setLoading(false)
      });
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
        {
          loading ? <Loader /> : 
          <div className="cards">
          {filteredResults.map(( item , i) => {
              return (
                <Card key={i} item={item} selected={isSelected === i} onChange = {() => setisSelected(i)} />
              )
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
