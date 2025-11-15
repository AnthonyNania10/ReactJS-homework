import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import CountPage from "./Count";
import GithubPage from "./Github";

const App = () => {
  const [productsState, setProductState] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }));

        setProductState(newProductsState);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="page-container">
      
      {/* Navigation Bar */}
      <nav className="navbar">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("count")}>Count</button>
        <button onClick={() => setCurrentPage("github")}>GitHub</button>
      </nav>

      {/* Main Content */}
      {currentPage === "home" && <SearchBar products={productsState} />}
      {currentPage === "count" && <CountPage />}
      {currentPage === "github" && <GithubPage />}
    </div>
  );
};

export default App;
