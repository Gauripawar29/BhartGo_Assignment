import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to cart!");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="img-fluid mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-success">₹{product.price}</h4>
          <button className="btn btn-dark mt-3" onClick={addToCart}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
