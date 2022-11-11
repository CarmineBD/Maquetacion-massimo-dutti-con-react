import logo from './assets/img/logo.svg';
import Main from './components/organisms/Main';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Aside from './components/organisms/Aside';
import './style.css';

function App() {
  return (
    <div className="App">

      {/* Primera row para el header */}
      <div className='row bg-primary c-gray height-lg is-flex sm:align-center content-center align-bottom p-64'>
        <Header title="Women's Collection Spring Summer 22"></Header>
      </div>

      {/* Segunda row para el main y el aside */}
      <div className='row'>
        <Main className="col-xs-12 col-sm-8 bg-primary sm:order-last"></Main>
        <Aside className='col-sx-12 col-sm-4 is-flex content-center w-100 p-24 align-center'></Aside>
      </div>

      {/* Tercera row para el footer */}
      <div className='row height-md'>
        <Footer className='col-xs-12 col-sm-10 bg-primary is-flex align-center'></Footer>
      </div>


    </div>
  );
}

export default App;
