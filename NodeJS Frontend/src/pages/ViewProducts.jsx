import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/**
 * @description Page for viewing products
 * @returns { Component }
 */
function ViewProducts() {
  /**
   * State for data and loading
   */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Ref for the search input
   */
  const searchRef = useRef(null);

  /**
   * Function to search for a product
   */
  const searchProduct = () => {
    const search = searchRef.current.value;
    axios.get(`http://localhost:3001/search?search=${search}`).then((response) => {
      setData(response.data);
    });
  }


  /**
   * Fetch data from the server
   */
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  /**
   * Function to delete a product
   * @param { String } id
   */
  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    axios.delete(`http://localhost:3001/products/${id}`).then(() => {
      axios.get("http://localhost:3001/products").then((response) => {
        setData(response.data);
      });
    });
  };

  /**
   * Styles for the page
   */
  const styles = {
    body_loading:
      "bg-blue-950 text-white font-bold flex items-center justify-center min-h-[100vh]",
    body: "min-h-[100vh] bg-blue-950 text-white px-8 py-12 flex flex-col gap-8",
    div_top: "flex justify-between items-center",
    button_create:
      "bg-blue-700  px-4 py-1 rounded-[15px] hover:bg-white hover:text-blue-700 transition-all duration-500",
    grid_products: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    card: "bg-blue-700 rounded-[25px] flex flex-col gap-8 p-8",
    card_img: "rounded-[25px] max-h-[160px] object-cover object-top",
  };

  /**
   * Check if the data is still loading
   */
  if (loading) {
    return <div className={styles.body_loading}>Loading...</div>;
  }

  /**
   * Return the page
   */
  return (
    <div className={styles.body}>
      <div className={styles.div_top}>
        <h1 className="font-bold text-4xl">Products</h1>
        <Link to="/create-product">
          <button className={styles.button_create}>Create</button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <input
          placeholder="Search..."
          className="rounded-l-[15px] text-gray-800 pl-4 py-1 bg-white min-w-[80%] lg:min-w-[50%]"
          type="text"
          name="search"
          ref={searchRef}
          id="search"
        />
        <button onClick={searchProduct} className="rounded-r-[15px] p-1 bg-white">🔍</button>
      </div>
      <ul className={styles.grid_products}>
        {data &&
          data.docs.map((product) => (
            <li className={styles.card} key={product._id}>
              <img
                className={styles.card_img}
                src={
                  product.image
                    ? product.image
                    : "https://w7.pngwing.com/pngs/427/263/png-transparent-cleaning-products.png"
                }
                alt={product.name}
              />
              <h2 className="font-semibold text-2xl">{product.name}</h2>
              <p>{product.description}</p>
              <div className="flex w-full justify-end gap-4">
                <Link to={`/edit-product/${product._id}`}>
                  <button className="text-orange-600 bg-white rounded-[15px] px-2 py-1">
                    Editar
                  </button>
                </Link>

                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-600 bg-white rounded-[15px] px-2 py-1"
                >
                  Borrar
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ViewProducts;
