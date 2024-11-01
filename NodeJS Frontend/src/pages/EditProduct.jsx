import Form from "../components/general/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditProduct() {
  const [data, setData] = useState({
    image: {
      value: null,
      error: "",
    },
    name: {
      value: "",
      error: "",
    },
    price: {
      value: "",
      error: "",
    },
    stock: {
      value: "",
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
    free_shipping: {
      value: false,
      error: "",
    },
    image_url: {
      value: "",
      error: "",
    },
  });

  const { id } = useParams();

  /**
   * Function to bring the product data to be edited
   */

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        const { name, price, stock, description, free_shipping, image } = response.data[0];
        setData((prevData) => ({
          ...prevData,
          name: { ...prevData.name, value: name },
          price: { ...prevData.price, value: price },
          stock: { ...prevData.stock, value: stock },
          description: { ...prevData.description, value: description },
          free_shipping: { ...prevData.free_shipping, value: free_shipping },
          image_url: { ...prevData.image, value: image },
        }));
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    };
    getProduct();
  }
  , [id]);

  const validate = () => {
    let isValid = true;

    if (data.image.value) {
      if (
        !["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
          data.image.value.type
        )
      ) {
        console.log(data.image.value);
        isValid = false;
        setData((prevData) => ({
          ...prevData,
          image: { ...prevData.image, error: "Invalid image type" },
        }));
      }
    }

    if (data.name.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        name: { ...prevData.name, error: "Name is required" },
      }));
    } else if (!/^[a-zA-Z0-9 ]+$/.test(data.name.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        name: {
          ...prevData.name,
          error: "Name must contain only letters and numbers",
        },
      }));
    }

    if (data.price.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price is required" },
      }));
    } else if (isNaN(data.price.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price must be a number" },
      }));
    } else if (data.price.value < 0) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price must be greater than 0" },
      }));
    }

    if (data.stock.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock is required" },
      }));
    } else if (isNaN(data.stock.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock must be a number" },
      }));
    } else if (data.stock.value < 0) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock must be greater than 0" },
      }));
    }

    if (data.description.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        description: {
          ...prevData.description,
          error: "Description is required",
        },
      }));
    }

    return isValid;
  };

  const editProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("image", data.image.value);
      formData.append("name", data.name.value);
      formData.append("price", data.price.value);
      formData.append("stock", data.stock.value);
      formData.append("description", data.description.value);
      formData.append("free_shipping", data.free_shipping.value ? "true" : "false");
      try {
        await axios.patch(`http://localhost:3001/products/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product edited");
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };

  const styles = {
    body: "min-h-[100vh] bg-blue-950 text-white px-8 py-12 flex flex-col gap-8",
    button_back:
      "bg-blue-700 px-4 py-1 rounded-[15px] hover:bg-white hover:text-blue-700 transition-all duration-500",
    button_create:
      "bg-white text-blue-700 px-4 py-1 rounded-[15px] hover:bg-blue-400 hover:text-white transition-all duration-500",
  };
  return (
    <div className={styles.body}>
      <div className="flex justify-end">
        <Link to="/">
          <button className={styles.button_back}>Back</button>
        </Link>
      </div>
      <h1 className="text-center text-3xl font-semibold">Edit product</h1>
      <Form data={data} setData={setData} event={editProduct} text="Update"/>
    </div>
  );
}

export default EditProduct;
