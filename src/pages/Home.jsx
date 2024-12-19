import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

import img1 from '../products/pic (5).jpeg';
import img2 from '../products/pic (21).jpeg';
import img3 from '../products/pic (3).jpeg';
import img14 from '../products/pic (4).jpeg';
import img5 from '../products/pic (7).jpeg';
import img6 from '../products/pic (1).jpeg';
import img7 from '../products/pic (17).jpeg';
import img8 from '../products/pic (18).jpeg';
import img9 from '../products/pic (19).jpeg';
import img10 from '../products/pic (20).jpeg';
import img11 from '../products/pic (22).jpeg';
import img12 from '../products/pic (23).jpeg';
import img13 from '../products/pic (24).jpeg';
import img15 from '../products/pic (26).jpeg';
import img16 from '../products/pic (28).jpeg';
import img17 from '../products/pic (16).jpeg';
import img18 from '../products/pic (15).jpeg';
import img19 from '../products/pic (14).jpeg';
import img20 from '../products/pic (13).jpeg';
import img21 from '../products/pic (12).jpeg';
import img22 from '../products/pic (11).jpeg';
import img23 from '../products/pic (10).jpeg';
import img24 from '../products/pic (9).jpeg';
import img25 from '../products/pic (8).jpeg';
import img26 from '../products/pic (2).jpeg';
import img27 from '../products/pic (6).jpeg';
import img28 from '../products/pic (25).jpeg';
import img29 from '../products/picss (1).jpeg';
import img30 from '../products/picss (2).jpeg';
import img31 from '../products/picss (3).jpeg';
import img32 from '../products/picss (4).jpeg';
import img33 from '../products/picss (5).jpeg';
import img34 from '../products/picss (6).jpeg';
import img35 from '../products/picss (7).jpeg';
import img36 from '../products/picss (8).jpeg';
import img37 from '../products/picss (9).jpeg';
import img38 from '../products/picss (10).jpeg';
import img39 from '../products/picss (11).jpeg';
import img40 from '../products/picss (12).jpeg';
import img41 from '../products/inv (1).jpeg';
import img42 from '../products/inv (2).jpeg';
import img43 from '../products/inv (3).jpeg';






 

function Home() {
  // Define products with original price and offer price directly
  const products = [
    {
      id: 1,
      name: 'Hairband 1',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img1
    },
    {
      id: 2,
      name: 'Bracelet 1',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets',
      image: img2
    },
    {
      id: 3,
      name: 'Hairbands 2',
      originalPrice:49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img12
    },
    {
      id: 4,
      name: ' Bracelet 3',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets',
      image: img14
    },
    {
      id: 5,
      name: 'Bracelet 2',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets',
      image: img5
    },
    {
      id: 6,
      name: 'Xmas Bracelet 1',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img6
    },
    {
      id: 7,
      name: 'xmas Bracelet 3',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img13
    },
    {
      id: 8,
      name: 'Xmas Bracelet 4',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img15
    }, {
      id: 9,
      name: 'Xmas Bracelet 5',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img16
    }, {
      id: 10,
      name: 'Xmas Bracelet 6',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img17
    }, {
      id: 11,
      name: 'Bracelet 4',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets ',
      image: img18
    }, {
      id: 12,
      name: 'Bracelet 5',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets ',
      image: img19
    }, {
      id: 13,
      name: 'Hairband 3',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img20
    }, {
      id: 14,
      name: 'xmas bracelet 7',
      originalPrice:99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img21
    }, {
      id: 15,
      name: ' xmas Bracelet 8',
      originalPrice: 99,
      offerPrice: 60,
      category: 'Christmas Bracelets',
      image: img22
    }, {
      id: 16,
      name: 'Hairbands 4',
      originalPrice:49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img23
    }, {
      id: 17,
      name: 'Bracelet 6',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets ',
      image: img24
    }, {
      id: 18,
      name: 'Xmas Bracelet 9',
      originalPrice: 99,
      offerPrice: 60,
      category: 'Christmas Bracelets',
      image: img25
    }, {
      id: 19,
      name: 'Xmas Bracelet 10',
      originalPrice: 99,
      offerPrice: 60,
      category: 'Christmas Bracelets',
      image: img26
    }, {
      id: 20,
      name: 'Hairband 5',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img27
    }, {
      id: 21,
      name: 'Xmas Bracelet 11',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img28
    }, {
      id: 22,
      name: 'Bracelet 9',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets',
      image: img3
    },
    {
      id: 23,
      name: 'Xmas Bracelet 12',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img7
    },{
      id: 24,
      name: 'Bracelet 7',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets',
      image: img8
    },{
      id: 25,
      name: 'Bracelet 8',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets ',
      image: img9
    },{
      id: 26,
      name: 'Bracelet 10',
      originalPrice: 79,
      offerPrice: 45,
      category: 'Bracelets ',
      image: img10
    },{
      id: 27,
      name: 'xmas Bracelet 13',
      originalPrice: 99,
      offerPrice: 65,
      category: 'Christmas Bracelets',
      image: img11
    },
    {
      id: 28,
      name: 'Hairband 01',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img29
    },
    {
      id: 29,
      name: 'Hairband 02',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img30
    },
    {
      id: 30,
      name: 'Hairband 03',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img31
    },{
      id: 31,
      name: 'Hairband 04',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img32
    },{
      id: 32,
      name: 'Hairband 005',
      originalPrice: 55,
      offerPrice: 35,
      category: 'Hairbands',
      image: img33
    },{
      id: 33,
      name: 'Hairband 006',
      originalPrice: 49,
      offerPrice: 29,
      category: 'Hairbands',
      image: img34
    },
    {
      id: 34,
      name: 'Aura Bracelet 1',
      originalPrice: 150,
      offerPrice: 99,
      category: 'Bracelets',
      image: img35
    },{
      id: 35,
      name: 'Hairband 007',
      originalPrice: 49,
      offerPrice:29,
      category: 'Hairbands',
      image: img36
    },
    {
      id: 36,
      name: 'Aura neckset',
      originalPrice: 120,
      offerPrice: 79,
      category: 'Neckset',
      image: img37
    },{
      id: 37,
      name: 'Aura earring',
      originalPrice: 50,
      offerPrice: 35,
      category: 'Earring',
      image: img38
    },{
      id: 38,
      name: 'Bracelet 11',
      originalPrice: 79,
      offerPrice: 49,
      category: 'Bracelets',
      image: img39
    },{
      id: 39,
      name: 'Bracelet 12',
      originalPrice: 79,
      offerPrice: 49,
      category: 'Bracelets',
      image: img40
    },{
      id: 40,
      name: 'invisible neckset 1',
      originalPrice: 120,
      offerPrice: 79,
      category: 'Neckset',
      image: img42
    },
    {
      id: 41,
      name: 'invisible neckset 1',
      originalPrice: 150,
      offerPrice: 110,
      category: 'Neckset',
      image: img41
    },{
      id: 42,
      name: 'invisible neckset 1',
      originalPrice: 150,
      offerPrice: 110,
      category: 'Neckset',
      image: img43
    },
    
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
          <option value="Christmas Bracelets">Christmas bracelets</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Hairbands">Hairbands</option>
          <option value="Neckset">Neckset</option>
           <option value="Earring">Earring</option>
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
<br></br>
              <h3 className="product-name">{product.name}</h3>
              <br />
              <p className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="offer-price">₹{product.offerPrice}</span>
              </p>
              <br />
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
              <p className="product-name"><br></br>{item.name}</p>
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
