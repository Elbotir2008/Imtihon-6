import { Form, InputGroup } from "react-bootstrap";
import "./addCart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddCart = () => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    comment: "",
    price: "",
    priceSale: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    toHome("/products");
    try {
      const res = await axios.post(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`,
        values
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const toHome = useNavigate();
  return (
    <section className="addCart-section">
      <div className="container-ad">
        <div className="add-content">
          <div className="inputs">
            <div className="top-inputs">
              <Form className="form" onSubmit={handleSubmit}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Название *
                  </InputGroup.Text>
                  <Form.Control
                    name="name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    required
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup size="lg" className="d-flex input-group">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Бренд *
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    className="brend-input-group"
                    name="brand"
                    required
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Цена
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="price"
                    className="brend-input-group"
                    required
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Цена со скидкой
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="priceSale"
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </InputGroup>
                <button className="Save-btn btn btn-success">Save</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCart;
