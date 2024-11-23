from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Route for the home page
@app.route('/')
def home():
    return "Welcome to the Flask API Server!"

# Example API route to fetch data
@app.route('/api/data', methods=['GET'])
def get_data():
    sample_data = {
        "message": "Hello, this is sample data!",
        "status": "success"
    }
    return jsonify(sample_data)

# Example API route to handle POST request
@app.route('/api/submit', methods=['POST'])
def submit_data():
    # Get JSON payload from the request
    data = request.json

    # Extract specific fields
    email = data.get("email")
    product = data.get("product")
    name = data.get("name")

    # Validate fields
    if not email or not product or not name:
        return jsonify({
            "message": "Missing required fields: 'email', 'product', or 'name'.",
            "status": "error"
        }), 400

    # Response with the received data
    response = {
        "message": "Data received successfully!",
        "status": "success",
        "received_data": {
            "email": email,
            "product": product,
            "name": name
        }
    }
    return jsonify(response), 201

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
