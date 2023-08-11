import "../App.css";
import NavBar from "./navbar";
import Main from "./main";
import Footer from "./footer";
import React, { useState } from "react";
import SideBar from "./sidebar";
import { useSelector } from "react-redux";

function App() {
  const products=useSelector((state)=>state.productsInStock); 
  const [productList,setProductList]=useState(products);
  const filterCat=(cat)=>{
    let newProducts=[];
    if(cat==="all"){
      newProducts=products;
    }else{
    newProducts=products.filter((ele)=>{
      return ele.category===cat;
    });
  }
    setProductList(newProducts);
  }
  return (
    <>
      <NavBar />
      <main
        className="container-fluid mt-4 mb-4 mx-auto"
        style={{ backgroundColor: "#50C878" }}
      >
        <div className="row">
          <div className="col-3 mt-5">
            <SideBar filters={filterCat}/>
          </div>
          <div className="col-9">
            <div className="row">
              <Main products={productList} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
