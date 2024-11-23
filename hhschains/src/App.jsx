import "./App.css";
import { React, useState } from "react";
import axios from "axios"; // Import axios

function App() {
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { email, product, name };

        try {
            // Use axios to send a POST request to the Flask API
            const response = await axios.post("http://127.0.0.1:5000/api/submit", formData);

            // Log the server's response
            console.log("Server response:", response.data);
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Failed to submit data.");
        }
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
