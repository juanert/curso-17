import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return(<div>Loading...</div>);
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data && data.docs.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
