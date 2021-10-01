import {getPost} from "./services/post/post.service"
import {useEffect, useState} from "react";
import "./App.css"
import {useDispatch, useSelector, useStore} from "react-redux";
import {SavePost} from "./store/actions";
import PostComponent from "./components/post/post.component";
import ContainerComponent from "./components/container.component";
function App() {
  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();

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

  const selectPost = (product) => {
    dispatch(SavePost(product))
  }
  const save = (value) => {
    console.log(value)
  }
  return (
    <div className="product-list">
      <ContainerComponent></ContainerComponent>
      { products.map(product => {
        return (
            <div className="product" onClick={()=>selectPost(product)}>
              <h1>{product.name}</h1>
            </div>
              )}) }
    </div>
  );
}

export default App;
