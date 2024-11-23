import "./App.css";
import { React, useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Product:", product);
        console.log("Name:", name);
        // Add your form submission logic here
    };

    const handleReset = () => {
        // Reset all state variables here
        setEmail("");
        setProduct("");
        setName("");
    };

    return (
        <div className="App">
            <h1>Product Selection Form</h1>
            <form>
                <label htmlFor="email">School Email*</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter school email"
                    required
                />
                <label htmlFor="product">Select Product*</label>
                <select
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select a product
                    </option>
                    <option value="Product A">Product A</option>
                    <option value="Product B">Product B</option>
                    <option value="Product C">Product C</option>
                </select>
                <label htmlFor="name">Your Name*</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <button
                    type="button"
                    onClick={handleReset}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
