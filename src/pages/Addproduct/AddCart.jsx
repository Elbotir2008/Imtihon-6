import { Form, InputGroup } from "react-bootstrap";
import "./addCart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  // brand: "",
  // price: "",
  // priceSale: "",
};

const onSubmit = (values) => {
  console.log("Form values", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required!"),
  // brand: Yup.string().required("brand is required!"),
  // price: Yup.string().required("price is required!"),
  // priceSale: Yup.string().required("priceSale is required!"),
});

const AddCart = () => {
  const [image, setImage] = useState("");
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    comment: "",
    price: "",
    priceSale: "",
  });
  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  const handleSubmit = async (event) => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products",
        formData
      )
      .then((res) => {
        console.log(res);
      });
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { errors, handleChange, handleBlur, touched } = formik;

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
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                    // onChange={handleChange}
                    // value={values.name}
                    // onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
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
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                  />
                  <div>
                    <Form.Control
                      type="file"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      name="file"
                      onChange={handleImage}
                    />
                  </div>
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
