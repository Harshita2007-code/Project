import "./App.css";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState(0);
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
      image: "https://poojaelectronics.in/storage/2023/08/Nikon-D7500-DSLR-Camera-with-18-140mm-Lens-Online-Buy-India_01.jpg"
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
      name: "Baby Monitor",
      price: "₹2,699",
      image: "https://www.vava.com/cdn/shop/files/vava-720p-baby-monitor-with-night-light.png?v=1741942571"
    },
    {
      id: 10,
      name: "Vacuum Cleaner",
      price: "₹3,799",
      image: "https://m.media-amazon.com/images/I/51-NgiUucAL._AC_UF894,1000_QL80_.jpg"
    }
  ];

  function addToCart() {
    setCart(cart + 1);
  }
  return (
    <>
    <nav className="navbar">
      <h1 className="logo">SHOPPYY</h1>
      <div className="cart">
        🛒 Cart ({cart})
      </div>
    </nav>
    <section className="container">
      <h2>LATEST GADGETS COLLECTION</h2>
      <p>Best electronic products at affordable prices.</p>
    </section>
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <button onClick={addToCart}>
            Add to Cart
          </button>
        </div>
    ))}
    </div>
    </>
  );
}
export default App;