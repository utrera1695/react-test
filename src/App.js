import {getPost} from "./services/post/post.service"
import {useEffect, useState} from "react";
import "./App.css"
function App() {
  const [products,setProducts] = useState([]);
  const getpostData = () => {
    getPost().then((response)=> {
      setProducts(response.data);
    }).catch(error => {
      console.error()
    })
  }

  useEffect(()=> {
    getpostData()
  },[])



  return (
    <div className="product-list">
      { products.map(product => {
        return (
            <div className="product">
              <h1>{product.name}</h1>
              <h6>{product.description}</h6>
            </div>
              )}) }
    </div>
  );
}

export default App;
