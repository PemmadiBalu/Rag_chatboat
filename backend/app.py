
from flask import Flask, request, jsonify
from flask_cors import CORS
from agent import create_agent

app = Flask(__name__)
CORS(app)

agent = create_agent()

@app.route("/")
def home():
    return "AI Agent Backend Running 🚀"

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "No message provided"}), 400

        user_input = data["message"]

        if not user_input.strip():
            return jsonify({"error": "Empty message"}), 400

        result = agent.invoke({"input": user_input})

        if isinstance(result, dict):
            response_text = result.get("output", str(result))
        else:
            response_text = str(result)

        return jsonify({"response": response_text})

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)