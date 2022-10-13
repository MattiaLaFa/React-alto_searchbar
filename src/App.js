import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <SearchBar/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
