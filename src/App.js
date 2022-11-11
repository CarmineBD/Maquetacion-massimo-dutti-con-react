import logo from './assets/img/logo.svg';
import './App.css';
// import ProductCard from './components/molecules/ProductCard'
import Main from './components/organisms/Main';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Aside from './components/organisms/Aside';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactaaaasssss
        </a>
      </header>

      {/* Primera row para el header */}
      <div className='row bg-primary c-gray height-lg is-flex sm:align-center content-center align-bottom p-64'>
        <Header title="Women's Collection Spring Summer 22"></Header>
      </div>

      {/* Segunda row para el main y el aside */}
      <div className='row'>
        <Aside className='col-sx-12 col-sm-4 is-flex content-center w-100 p-24 align-center'></Aside>
        <Main className="col-xs-12 col-sm-8 bg-primary sm:order-last p"></Main>
      </div>

      {/* Tercera row para el footer */}
      <div className='row height-md'>
        <Footer className='col-xs-12 col-sm-10 bg-primary is-flex align-center'></Footer>
      </div>


    </div>
  );
}

export default App;
