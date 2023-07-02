import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/productList";

export const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(res=>{
            setProducts(res.data);
        })
        .catch(err=>{console.log(err)});
    },[])

    return (
        <div>
            <h2>Home</h2>
            <p>Bienevenido {user.fullName} / {user.email} </p>
            <button>Logout</button>
            <ProductList products={products} />
        </div>
    )
}