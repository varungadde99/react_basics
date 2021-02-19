import logo from './logo.svg';
import Greet from './Greet';
import productList from './productList.json';
import PrintList from './Utils';
import ProductList from "./ProductList";

function App() {
  
  //console.log(productList)  
  return (
    <div className="App">
      
      <ProductList productListObj = {productList} />
      
      {/*
        <Greet name = {"Varun"} surname={"Gadde"}/>
        
        <PrintList printList = {productList} />
        
        {productList.map((product) => <h2>{product.id}</h2>)}
        {<header className="App-header">
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
          Learn React
        </a>
      </header> } */}


    </div>
  );
}

export default App;
