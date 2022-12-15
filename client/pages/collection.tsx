import React from "react";
import { useEffect , useState } from "react";
import Link from "next/link";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";


const collection = () => {

  const [allProducts, setAllProducts] = useState([])
 
 
  const filter = (para) => {
    axios.get(`http://localHost:3001/user/filter/${para}`).then(res => {
      console.log(res.data);
      
      setAllProducts(res.data)
    })
  }
  const filters = (para) => {
    axios.get(`http://localHost:3001/user/filters/${para}`).then(res => {
      console.log(res.data );
      
      setAllProducts(res.data)
    })
  }
  // const [searching,setSearching]=useState('')
  useEffect(() => {
    axios.get("http://localHost:3001/user/getAllProduct").then(res => {
      setAllProducts(res.data)
    })
  }, [])
  console.log(allProducts,"aziz");
  
  

  return (
    <div>
      <nav
        className="relative flex h-12 items-center px-4 justify-between shadow-md dark:shadow-gray-700"
        style={{ height: "70px" }}
      >
        <img
          src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png"
          className="logo"
          style={{ width: "200px", height: "170px" }}
          alt=""
        />

        <div>
          <Link href="/home" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link>
          <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link>

          <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link>
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          <Link href="/login" className="p-2 text-dark no-underline hover:underline">
            Login
          </Link>
        </div>
      </nav>

      <div>
        <div className="row justify-content-center">
                    <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full" >
                  Pets
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("cats")
                  }}
                >
                  cats
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("dogs")
                  }}
                >
                  dogs
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("kittens")
                  }}
                >
                  kittens
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("puppies")
                  }}
                >
                  puppies
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full ">
                  Categories
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
              <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("coats&jackets")
                  }}
                >
                  coats&jackets
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("sweaters&hoodies")
                  }}
                  
                >
                  sweaters&hoodies
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("shirts&dresses")
                  }}
                  
                >
                  shirts&dresses
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("accessories")
                  }}
                >
                
                  accessories
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>



      <div className="container">
       <div className="row">
        {  allProducts && allProducts.map((e)=>{
          return ( 
            
            <div className="col col-sm-6 col-lg-4">
            <a href="#" className="relative group" style={{ width: "336px", height: "216" }}>
              <button
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            
              <img
                src={e.Pimage}
                alt=""
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
                style={{ width: "336px", height: "216" }}
              />
            
              <div className="relative p-6 bg-white border border-gray-100 no-underline">
               
            
                <h3 className="mt-4 text-lg font-medium text-gray-900 no-underline" onClick={()=>{

                }} >{e.Pname}</h3>
               
                
                
            
                <p className="mt-1.5 text-sm text-gray-700">{e.Pprice}$</p>
            
                <form className="mt-4">
                  <button
                    className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
                      
                    </div>

          )
        })
         

      

        
        
        }
        
      
       </div>
       </div>
             



              
              </div>
            </div>
        
  );
};

export default collection;
