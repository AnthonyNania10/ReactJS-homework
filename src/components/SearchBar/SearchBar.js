import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search products..."
      />

      {shouldDisplayButton && (
        <button onClick={handleClearClick}>clear</button>
      )}


      {props.products.length === 0 && <p>Loading products...</p>}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
