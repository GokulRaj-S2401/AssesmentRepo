import Header from './components/header/Header';
import Trending from './components/trending/Trending';
import './App.css'
function App() {
  // let TrendingKey = []
  // let Trending = []
  // To Fetch data for Trending keywords

 

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h3 style={{padding:'20px 0px'}} >Trending Tenor Searches</h3>
        <Trending />
      </div>
    </div>
  );
}

export default App;
