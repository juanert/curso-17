import propTypes from "prop-types";

function Form({ data, setData, event, text }) {
  const styles = {
    button_create:
      "bg-blue-700  px-4 py-1 rounded-[15px] hover:bg-white hover:text-blue-700 transition-all duration-500",
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        value:
          type === "file" ? files[0] : type === "checkbox" ? checked : value,
        error: "",
      },
    }));
  };

  
  return (
    <form
      method="POST"
      className="py-8 px-4 flex flex-col gap-8 items-center bg-blue-700 rounded-[15px]"
      onSubmit={event}
    >
      {
        data.image_url.value && (
          <img
            className="w-20 h-20 rounded-full"
            src={data.image_url.value}
            alt="product"
          />
        )
      }
      <div className="flex flex-col gap-4 w-[80%]">
        <label htmlFor="image">Image</label>
        <input
          className="text-gray-800"
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
        />
        {data.image.error && (
          <span className="text-red-500">{data.image.error}</span>
        )}
      </div>
      <div className="flex flex-col gap-4 w-[80%]">
        <label htmlFor="name">Name</label>
        <input
          className="text-gray-800"
          type="text"
          id="name"
          name="name"
          value={data.name.value}
          onChange={handleChange}
        />
        {data.name.error && (
          <span className="text-red-500">{data.name.error}</span>
        )}
      </div>
      <div className="flex flex-col gap-4 w-[80%]">
        <label htmlFor="price">Price</label>
        <input
          className="text-gray-800"
          type="text"
          id="price"
          name="price"
          value={data.price.value}
          onChange={handleChange}
        />
        {data.price.error && (
          <span className="text-red-500">{data.price.error}</span>
        )}
      </div>
      <div className="flex flex-col gap-4 w-[80%]">
        <label htmlFor="stock">Stock</label>
        <input
          className="text-gray-800"
          type="text"
          id="stock"
          name="stock"
          value={data.stock.value}
          onChange={handleChange}
        />
        {data.stock.error && (
          <span className="text-red-500">{data.stock.error}</span>
        )}
      </div>
      <div className="flex flex-col gap-4 w-[80%]">
        <label htmlFor="description">Description</label>
        <textarea
          className="text-gray-800"
          id="description"
          name="description"
          value={data.description.value}
          onChange={handleChange}
        />
        {data.description.error && (
          <span className="text-red-500">{data.description.error}</span>
        )}
      </div>
      <div className="flex flex-col items-start gap-4 w-[80%]">
        <label htmlFor="free_shipping">Free shipping</label>
        <input
          className="text-gray-800"
          type="checkbox"
          id="free_shipping"
          name="free_shipping"
          checked={data.free_shipping.value}
          onChange={handleChange}
        />
      </div>
      <button className={styles.button_create}>{text}</button>
    </form>
  );
}

Form.propTypes = {
  event: propTypes.func.isRequired,
  data: propTypes.object.isRequired,
  setData: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};

export default Form;
