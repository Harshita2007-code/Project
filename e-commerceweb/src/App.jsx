import "./App.css";
import { useState } from "react";
function App() {
  const[showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1,999",
      image: "https://shopatsc.com/cdn/shop/files/CH520_A__2500x2500_3981f43e-bf07-4246-98fd-42a92f3c33e8.jpg?v=1745490430"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/71XA0QCW5lL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "₹1,499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxK_fHCS3Zmwaf55d8zE0gjtOnmV3EvFHWw&s"
    },
    {
      id: 4,
      name: "Ear buds",
      price: "₹1,299",
      image: "https://www.leafstudios.in/cdn/shop/files/1_c4f26d0d-4aa2-407d-9a3f-5f1838ffed5f_800x.png?v=1773822784"
    },
    {
      id: 5,
      name: "DSLR Camera",
      price: "₹92,990",
      image: "https://content.jdmagicbox.com/quickquotes/images_main/sony-alpha-a68-dslr-camera-802417229-vl12bohx.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: "₹899",
      image: "https://www.lapcare.com/cdn/shop/files/1_6cea8e29-1235-450f-87c2-9da59f5088fd.webp?v=1772803586&width=2048"
    },
    {
      id: 7,
      name: "Laptop",
      price: "₹70,000",
      image: "https://x.imastudent.com/content/0020894_microsoft-135-surface-laptop-3-core-i5-8gb-256gb-touch-screen-laptop_360.jpeg"
    },
    {
      id: 8,
      name: "Tablet Android",
      price: "₹42,999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTLxm5DOvtL61N5E4u1kWG-LhUbPN5UasXQ&s"
    },
    {
      id: 9,
      name: "Gaming Keyboard",
      price: "₹2,699",
      image: "https://m.media-amazon.com/images/I/714Y4KXLVPL._AC_SL1500_.jpg"
    },
    {
      id: 10,
      name: "Vacuum Cleaner",
      price: "₹3,799",
      image: "https://m.media-amazon.com/images/I/51-NgiUucAL._AC_UF894,1000_QL80_.jpg"
    }
  ];

  function addToCart(product) {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
     } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
    }
  }
  return (
    <>
    <nav className="navbar">
      <h1 className="logo">GadgetHub</h1>
      <div className="cart"
            onClick = {() => setShowCart(!showCart)}>
        🛒 Cart ({cart.length})
      </div>
    </nav>

    <section className="container">
      <h2>LATEST GADGETS COLLECTION</h2>
      <p>Best electronic products at affordable prices.</p>
    </section>

    <div className="products">
      {products.map((product) => {
        const cartProduct = cart.find(
            (item) => item.id === product.id
          );
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              {cartProduct && (
                <p className="quantity">
                  Added: +{cartProduct.quantity}
                </p>
              )}
        </div>
          );
    })}
    </div>

    {showCart && (
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            className="close-btn"
            onClick={() => setShowCart(false)}
          >
          X
          </button>
        </div>
        {cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
          <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))
    )}
  </div>
)}
    </>
  );
}

export default App;