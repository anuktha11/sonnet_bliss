import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

import img1 from '../products/pics (22).jpeg';
import img2 from '../products/pics (23).jpeg';
import img3 from '../products/pics (20).jpeg';
import img14 from '../products/pics (24).jpeg';
import img5 from '../products/pics (26).jpeg';
import img6 from '../products/pics (27).jpeg';
// import img7 from '../products/img4.jpg';
// import img8 from '../products/t.jpg';
// import img9 from '../products/tera.jpg';
// import img10 from '../products/terac.jpg';
// import img11 from '../products/im.jpg';

function Home() {
  // Define products with original price and offer price directly
  const products = [
    {
      id: 1,
      name: 'Bangle Set 1',
      originalPrice: 100,
      offerPrice: 80,
      category: 'Christmas Bracelets',
      image: img1
    },
    {
      id: 2,
      name: 'Bracelets Set 1',
      originalPrice: 60,
      offerPrice: 50,
      category: 'Bracelets',
      image: img2
    },
    {
      id: 3,
      name: 'Hairbands Set 1',
      originalPrice: 150,
      offerPrice: 130,
      category: 'Hairbands',
      image: img3
    },
    {
      id: 4,
      name: 'Choker Set 1',
      originalPrice: 200,
      offerPrice: 180,
      category: 'Christmas Hairbands',
      image: img14
    },
    {
      id: 5,
      name: 'Hair Accessory Set 1',
      originalPrice: 90,
      offerPrice: 75,
      category: 'Hair Accessories',
      image: img5
    },
    {
      id: 6,
      name: 'Jhumka Set 1',
      originalPrice: 120,
      offerPrice: 100,
      category: 'Jhumkas',
      image: img6
    },
    // Add more products as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [zoomedImage, setZoomedImage] = useState(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const [cart, setCart] = useState({});
  const [cartVisible, setCartVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const cartRef = useRef(null);

  const filteredProducts = products
    .filter(product =>
      (filterCategory === 'All' || product.category === filterCategory) &&
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => sortOrder === 'asc' ? a.offerPrice - b.offerPrice : b.offerPrice - a.offerPrice);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleImageClick = (image) => setZoomedImage(zoomedImage === image ? null : image);
  const closeZoom = () => setZoomedImage(null);

  const clearFilters = () => {
    setSearch('');
    setFilterCategory('All');
    setSortOrder('asc');
  };

  const areFiltersActive = search || filterCategory !== 'All';

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        if (updatedCart[product.id].quantity < 10) {
          updatedCart[product.id].quantity += 1;
        } else {
          setMessage('Contact vendor directly for more than 10.');
        }
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [message]);

  
  

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  const updateQuantity = (id, increment) => {
    setLoading(true);
    console.log(loading);
    
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        const currentQuantity = updatedCart[id].quantity;
        const newQuantity = currentQuantity + increment;
        if (newQuantity < 1) {
          delete updatedCart[id];
        } else if (newQuantity <= 10) {
          updatedCart[id] = { ...updatedCart[id], quantity: newQuantity };
        } else {
          setMessage('Contact vendor directly for more than 10 items.');
        }
      }
      return updatedCart;
    });
    setLoading(false);
  };

  // const calculateTotal = () => {
  //   const total = Object.values(cart).reduce((acc, item) => acc + item.offerPrice * item.quantity, 0);
  //   return total + 60; // Flat shipping charge
  // };
  const calculateTotal = () => {
    return Object.values(cart).reduce((total, item) => total + (item.offerPrice * item.quantity), 0);
  };
  

  const sendCartToWhatsApp = () => {
    const cartDetails = Object.values(cart)
      .map(item => `${item.name}: ${item.quantity} x ₹${item.offerPrice} = ₹${item.quantity * item.offerPrice}`)
      .join('\n');
    const totalCost = calculateTotal();
    const message = `My Cart:\n${cartDetails}\n Shipping: ₹60 \nTotal: ₹${totalCost}\n`;
    const vendorNumber = '919442533967'; // Vendor's WhatsApp number
    const whatsappUrl = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setCart({});
    setMessage('Cart cleared after sending.');
  };

  const cartItemsCount = Object.keys(cart).length;

  useEffect(() => {
    if (cartVisible && cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cartVisible]);

  return (
    <main className="main-content">
      <header className="head">
        <div className="cart-icon" onClick={() => setCartVisible(!cartVisible)}>
          <div className="cart-icon-background">
            🛒 {cartItemsCount}
          </div>
        </div>
      </header>

      {message && <p className="message">{message}</p>}

      <section className="filters">
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="sort-select">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <button
          onClick={clearFilters}
          className={`clear-filter-btn ${areFiltersActive ? 'active' : ''}`}
        >
          Clear Filter
        </button>

        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="filter-select">
          <option value="All">All Categories</option>
          <option value="Christmas bracelets">Christmas bracelets</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Hairbands">Hairbands</option>
          <option value="Christmas Hairbands">Christmas Hairbands</option>
          <option value="Hair Accessories">Hair Accessories</option>
          <option value="Jhumkas">Jhumkas</option>
        </select>
      </section>

      <section className="products">
        {currentProducts.length ? (
          currentProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
  src={product.image}
  alt={product.name}
  className={`product-image ${zoomedImage === product.image ? 'zoom' : ''}`}
  onClick={() => handleImageClick(product.image)}
  title="Click here for full pic"
/>

              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="offer-price">₹{product.offerPrice}</span>
              </p>
              {cart[product.id] ? (
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          ))
        ) : (
          <p className="no-products-found">No Products Found</p>
        )}
      </section>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="page-btn">Previous</button>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)} className="page-btn">Next</button>
      </div>

      {zoomedImage && (
        <div className="zoomed-image-overlay" onClick={closeZoom}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

{cartVisible && (
  <div className="cart" ref={cartRef}>
    <h3>Your Cart</h3>
    {Object.keys(cart).length === 0 ? (
      <div>
        <p>Your cart is empty.</p>
        {/* <button onClick={() => setCartVisible(false)} className="close-cart-btn"> </button> */}
      </div>
    ) : (
      <div>
        {Object.values(cart).map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-details">
              <p className="product-name">{item.name}</p>
              <p className="product-price">₹{item.offerPrice}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, -1)} className="decrease-btn">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="increase-btn">+</button>
              </div>
              <p className="product-amount">₹{item.offerPrice * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
            {message && <p className="message">{message}</p>}

          </div>
        ))}
        <div className="cart-total">
          <p>Total Amount: ₹{calculateTotal()}</p>
          {/* Add shipping only once here */}
          <p>Shipping: ₹60</p>
          <p>Total with Shipping: ₹{calculateTotal() + 60}</p>
        </div>
        <button onClick={sendCartToWhatsApp} className="send-cart-btn">Send to WhatsApp</button>
      </div>
    )}
    <button onClick={() => setCartVisible(false)} className="close-cart-btn">Close Cart</button>
  </div>
)}


    </main>
  );
}

export default Home;
