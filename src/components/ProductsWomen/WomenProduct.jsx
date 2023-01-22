import axios from "axios";
import "../ProductsWomen/WomenProduct.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Home/navbar/Navbar";

import WomenProductCard from "./WomenProductCard";
import { Select } from "@chakra-ui/react";

function WomenProduct() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `https://63c8e28ec3e2021b2d4b1ef2.mockapi.io/women`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (order) {
      if (order === "LTH") {
        const arr = [...products].sort((a, b) => a.price - b.price);
        setProducts([...arr]);
      } else if (order === "HTL") {
        const arr = [...products].sort((a, b) => b.price - a.price);
        setProducts([...arr]);
      }
    }
  }, [order]);

  return (
    <div>
      <Navbar />
      <h1 className="heading1">Women Section</h1>
      <div className="MenProduct__select">
        <Select
          placeholder="Select option"
          width="25%"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="LTH">Low to High</option>
          <option value="HTL">High to Low</option>
        </Select>
      </div>
      <div className="WomenProducts">
        {/* Left */}
        <div className="WomenProducts__left">
          <div class="filter">
            <hr />
            <h3>Search by property name</h3>
            <input type="text" id="property" placeholder="Hotel Name" />
            <hr />
            <h3>Filter by</h3>
            <h4>Star Rating</h4>
            <button>
              1<i class="fa fa-star"></i>
            </button>
            <button>
              2<i class="fa fa-star"></i>
            </button>
            <button>
              3<i class="fa fa-star"></i>
            </button>
            <button>
              4<i class="fa fa-star"></i>
            </button>
            <button>
              5<i class="fa fa-star"></i>
            </button>
            <br />
            <div>
              <h4>Your budget</h4>

              <input type="checkbox" class="budget" id="b1" />
              <label for="b1">less than $75</label>
              <br />
              <input type="checkbox" class="budget" id="b2" />
              <label for="b2">$75 to $125</label>
              <br />
              <input type="checkbox" class="budget" id="b3" />
              <label for="b3">$125 to $200</label>
              <br />
              <input type="checkbox" class="budget" id="b4" />
              <label for="b4">$200 to $300</label>
              <br />
              <input type="checkbox" class="budget" id="b5" />
              <label for="b5">Greater than $300</label>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="WomenProducts__right">
          {products.map((item) => (
            <WomenProductCard
              key={item.id}
              id={item.id}
              image={item.images.image1}
              title={item.title}
              price={item.price}
              rating={item.rating}
              brand={item.brand}
              categories={item.categories}
              actualPrice={item.off_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenProduct;
