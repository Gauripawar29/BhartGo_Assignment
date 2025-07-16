import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch product data from Platzi Fake API
  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  // Handle Buy Now: navigate to product details page
  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.slice(0, 12).map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.images[0]}
                alt={item.title}
                className="card-img-top img-fluid"
                style={{ height: '300px', objectFit: 'contain', padding: '10px' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text fw-semibold text-muted">Price: ₹{item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBuyNow(item.id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
