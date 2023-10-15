import "./Details.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const paramId = param.id * 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" +
            paramId
        );
        setProduct([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);
  return (
    <div>
      {product.map((el) => {
        return (
          <div className="Details" key={el.id}>
            <section className="details">
              <div className="container">
                <div className="big">
                  <div className="cart">
                    <div className="left">
                      <img src="../detail.jpg" alt="img" />
                    </div>
                    <div className="card-content">
                      <div className="name">
                        <h3>Name: {el.name}</h3>
                        <p className="pDetails">{el.name}</p>
                      </div>
                      <div className="name">
                        <h3>Brand: {el.brand}</h3>
                      </div>
                      <div className="name">
                        <h3>About: {el.description}</h3>
                      </div>
                      <div className="name">
                        <h3>Price: {el.price}</h3>
                      </div>
                      <div className="name">
                        <h3>PriceSale: {el.priceSale}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
