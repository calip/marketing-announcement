
import React from 'react';
import './App.css';

async function searchItem(q) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://marketing-announcement-api.vercel.app/api/marketing-announcement`, {
    "method": "GET",
  });
  const body = await response.json();
  console.log(q, body)
  return body;
}
function App() {
  const [query, setQuery] = React.useState("");
  const [list, setList] = React.useState(null);

  const search = (e) => {
    e.preventDefault();
    searchItem(query).then(setList);
  };

  return (
    <div className="App">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <div className="item-container">
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
      }
    </div>
  );
}

function Item({ item }) {
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  return (
    <div className="item">

      {item.thumbnail &&
          <img
            alt=""
            src={item.thumbnail}
            className="responsive"
          />
      }

      <div className="right">
        <h2 className="title">
          <a href={item.title}>{item.title}</a>
        </h2>

        <p className="description">
          {item.description}
        </p>

        <div className="meta">
          <span>{formatDate(item.updatedOn)}</span>

          <span className="provider">
            {item.updatedBy}
          </span>
        </div>
      </div>

    </div>
  );
}

export default App;
