import axios from "axios";
import React, { useEffect, useState } from "react";
import "./products.scss";
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // PAGINATION
  let limit = 10;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      const res = await axios.get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products?limit=${limit}&page=${page}`
      );
      setPosts(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products"
        );
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  function deletePr(Id) {
    axios
      .delete(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/${Id}`
      )
      .catch((err) => console.log(err));
    setTimeout(() => {
      window.location.reload();
    }, 1050);
  }

  const [input, setInput] = useState("");
  const searchText = (e) => {
    const inputText = e.target.value.toLowerCase();
    setInput(inputText);
    // console.log(input);
  };

  const filtered = posts.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });

  return (
    <section className="products-section">
      <div className="container">
        {console.log(posts)}
        {posts.lenght < 3 ? (
          <div className="products-flex">
            <h1>Вы пока не создали ни одного товара</h1>
            <div className="img">
              <img src="image 2.svg" alt="Eror" />
            </div>
            <button className="btn btn-success">Создать первый товар</button>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Название</th>
                <th>Бренд</th>
                <th>Цена</th>
                <th>Скидкой</th>
                <th>
                  <Search searchText={searchText} />
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((fl) => (
                <tr key={fl.id} className="mb-3">
                  <td className="item">
                    <Link to={`/Details/${fl.id}`} className="linkDetails">
                      {fl.name}
                    </Link>
                  </td>
                  <td>{fl.brand}</td>
                  <td>{fl.price}</td>
                  <td>{fl.priceSale}</td>
                  <td className="crud-img">
                    <Link to={`/edit/${fl.id}`}>
                      <img src="Редактировать.svg" alt="Eror" />
                    </Link>
                  </td>
                  <td className="crud-img">
                    <img
                      src="Корзина.svg"
                      alt="Eror"
                      onClick={() => deletePr(fl.id)}
                    />
                  </td>
                </tr>
              ))}
              {posts.map((ph) => (
                <tr key={ph.id} className="mb-3">
                  <td className="item">
                    <Link to={`/Details/${ph.id}`} className="linkDetails">
                      {" "}
                      {ph.name}
                    </Link>
                  </td>
                  <td>{ph.brand}</td>
                  <td>{ph.price}</td>
                  <td>{ph.priceSale}</td>
                  <td className="crud-img">
                    <Link to={`/edit/${ph.id}`}>
                      <img src="Редактировать.svg" alt="Eror" />
                    </Link>
                  </td>
                  <td className="crud-img">
                    <img
                      src="Корзина.svg"
                      alt="Eror"
                      onClick={() => deletePr(ph.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          {arrBtns?.map((item) => (
            <button key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
