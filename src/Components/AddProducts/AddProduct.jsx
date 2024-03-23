import React from "react";
import axios from "axios";
import "./AddProduct.css";

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      category: "",
      aboutProduct: "",
      image: "",
    };
  }

  // Method to handle changes in input fields
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Method to handle product submission
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Creating an object with the form data
      const formData = {
        productName: this.state.productName,
        category: this.state.category,
        aboutProduct: this.state.aboutProduct,
        image: this.state.image,
      };

      // Convert form data to JSON
      const jsonData = JSON.stringify(formData);

      // Make an HTTP POST request to the backend endpoint using Axios
      const response = await axios.post(
        "https://akureta-backend.onrender.com/addProduct",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json", // Set Content-Type header to JSON
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to add product");
      }

      // Reset form fields after successful submission
      this.setState({
        productName: "",
        category: "",
        aboutProduct: "",
        image: null,
      });

      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Method to handle image upload procedure
  handleImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    console.log(base64)
    this.setState({ image: base64 });
  };


  render() {
    return (
      <div className="add-products-container">
      <div className="add-product">
        <h1>ADD PRODUCTS</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            PRODUCT NAME:
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            CATEGORY:
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            ABOUT PRODUCT:
            <input
              type="text"
              name="aboutProduct"
              value={this.state.aboutProduct}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            ADD IMAGE:
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImage}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
export default AddProduct;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () =>{
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })

}
