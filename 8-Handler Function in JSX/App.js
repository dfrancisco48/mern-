import * as React from 'react';
import logo from './logo.svg';
import './App.css';

class Developer {
  constructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  }
  getName() {
  return this.firstName + ' ' + this.lastName;
  }
  }
  

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: ' Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: ' Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

function getTitle(title) {
  return title;
  }
const App = () => (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <h1>My Hacker Stories</h1>
        <Search />
        <hr />
        <ul>
        {list.map(function (item) {
        return (
        <li key={item.objectID}>
        <span>
        <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </li>
        );
        })}
            </ul>

        {/* render the list here */}
        {/* and by the way: that's how you do comments in JSX */}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  const Search = () => {
    const handleChange = (event) => {
      console.log(event.target.value);
    }

    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
   );
  };
const List = () => (
  <ul>
  {list.map((item) => (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  ))} 
</ul>
);

export default App;
