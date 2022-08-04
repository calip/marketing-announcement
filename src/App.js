
import React, { useEffect } from 'react';
import './App.css';
import Breadcrumb from './UI/Breadcrumb';
import Header from './UI/Header';
import Item from './UI/Item';
import Searchbar from './UI/Searchbar';


function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://marketing-announcement-api.vercel.app/api/marketing-announcement`, {
        "method": "GET",
      });
      const data = await response.json();
      setResults(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterResults = results.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filterResults);
  }, [searchTerm, results]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Breadcrumb />
        <Searchbar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      </div>

      {filteredResults.map(( item , i) => {
        return (
          <Item key={i} item={item} />
        );
      })}
    </div>
  );
}

export default App;
