import React, { useState, useEffect } from 'react';
import './Menu.css'; // Import your CSS file

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(5);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch menu data when component mounts
  useEffect(() => {
    fetchMenuData();
  }, []);

  // Update total price whenever cart changes
  useEffect(() => {
    updateCartDisplay();
  }, [cart]);

  // Function to proceed to payment
  const proceedToPayment = () => {
    const orderDetails = {
      items: cart,
      total: totalPrice.toFixed(2),
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    window.location.href = 'paymentsystem.html'; // Adjust path as necessary
  };

  // Fetching menu data from the server
  const fetchMenuData = async () => {
    try {
      const [breakfastResponse, lunchResponse, dinnerResponse] = await Promise.all([
        fetch('http://localhost:3003/breakfast'),
        fetch('http://localhost:3003/Lunch'),
        fetch('http://localhost:3003/dinner'),
      ]);

      const breakfastItems = await breakfastResponse.json();
      const lunchItems = await lunchResponse.json();
      const dinnerItems = await dinnerResponse.json();

      setAllMenuItems([...breakfastItems, ...lunchItems, ...dinnerItems]);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  };

  // Add item to cart
  const addToCart = (index, item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.index === index);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.index === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, index, quantity: 1 }];
      }
    });
  };

  // Update the total price in the cart
  const updateCartDisplay = () => {
    const price = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
    setTotalPrice(price);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.index === index ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  // Increase quantity of an item in the cart
  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.index === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Filtering menu items based on search term
  const filteredMenuItems = allMenuItems.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to display the menu
  const displayMenu = (menuItems) => {
    const itemsToDisplay = menuItems.slice(0, displayedCount);
    return itemsToDisplay.map((item, index) => {
      const { name, price, discount, category } = item; // Get the category and name
      const discountedPrice = (price - price * (discount / 100)).toFixed(2);

      return (
        <div key={index} className="item-container1 mb-5" style={{ height: '400px', marginBottom: '20px'  }}>
          <img
            src={`./image/breakfast/${name}.jpg`} // Corrected dynamic path
            alt={name}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = './image/breakfast/${name}.jpg'; // Fallback image path
            // }}
            style={{ width: '200px', height: '100px' }}
          />
          <div className="item-header">
            <h4>{name}</h4>
            <button className="buttonrate">{discount ? 4.4 : 4.0}<i className="fa-regular fa-star"></i></button>
          </div>
          <div className="price-offer">
            <h5 style={{ textDecoration: 'line-through', color: 'red' }}>Price: ${price.toFixed(2)}</h5>
            <p>{discount || 0}% off</p>
            <h5><strong>Now: ${discountedPrice}</strong></h5>
            <div>
            <button className="add-to-cart " onClick={() => addToCart(index, { name, price: discountedPrice })}>
              Add to cart
            </button>
          </div>
          </div>

         
          
        </div>
      );
    });
  };

  // Function to show more items
  const showMore = () => {
    setDisplayedCount((prevCount) => prevCount + 4);
  };

  // Function to show fewer items
  const showLess = () => {
    setDisplayedCount((prevCount) => Math.max(4, prevCount - 4));
  };

  return (
    <div>
      <input  type="text"  placeholder="Search..." value={searchTerm}    onChange={(e) => setSearchTerm(e.target.value)}
        data-search   />

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div>Total Price: <span id="total-price">${totalPrice.toFixed(2)}</span></div>
       
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.index}>
                <span>{item.name} (x{item.quantity})</span>
                <button onClick={() => removeFromCart(item.index)}>Remove</button>


              </div>

            ))
          )}
        </div>
  <div><button id="proceed-button"  onClick={proceedToPayment} style={{ display: totalPrice > 0 ? 'block' : 'none' }}> Proceed to Payment
        </button></div>
      </div>

      <div className="menu-category" style={{ marginBottom: '20px' }}>
        {displayMenu(filteredMenuItems)}
        <button    id="showMoreBtn"  onClick={showMore} style={{ display: displayedCount < filteredMenuItems.length ? 'block' : 'none' }}  >
          Show More
        </button>
          <button id="showLessBtn"  onClick={showLess} style={{ display: displayedCount > 5 ? 'block' : 'none' }} >
          Show Less
        </button>
      </div>
    </div>
  );
};

export default Menu;