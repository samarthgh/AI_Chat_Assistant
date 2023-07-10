# J.A.R.V.I.S - AI Chat Assistant using OpenAI's API

This is a basic implementation of an AI chat assistant that uses OpenAI's API to generate responses to user queries. The chat assistant, named JARVIS, is designed to provide fast and informative answers to user questions.

## Technologies Used

- Python
- Flask (Web framework)
- HTML
- CSS
- JavaScript

## Prerequisites

- Python 3.x
- Flask library
- OpenAI API key

## Installation

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Install the required Python packages using pip:

   ```
   pip install flask
   ```

3. Set up your OpenAI API key by creating a `.env` file in the project directory and adding the following line:

   ```
   API_KEY=<your-api-key>
   ```

## Usage

1. Run the Flask server by executing the `main.py` file:

   ```
   python main.py
   ```

   The server will start running on `http://localhost:5000`.

2. Open a web browser and navigate to `http://localhost:5000`.

3. You will be greeted with the JARVIS chat interface. Enter your question in the input field and click the send button.
<img width="1200" alt="Screenshot 2023-07-10 at 1 48 02 PM" src="https://github.com/samarthgh/AI_Chat_Assistant/assets/94733648/3051b82c-6307-4f17-b21f-afed103c7239">

<img width="1200" alt="Screenshot 2023-07-10 at 1 54 29 PM" src="https://github.com/samarthgh/AI_Chat_Assistant/assets/94733648/abd8443c-64a7-4ec7-b7db-5ca4e47da24e">




4. JARVIS will use the OpenAI API to generate a response to your question and display it on the screen.

   <img width="1235" alt="Screenshot 2023-07-10 at 1 55 13 PM" src="https://github.com/samarthgh/AI_Chat_Assistant/assets/94733648/58d6a31a-68e9-4981-9efc-e5484ef81142">


5. You can continue the conversation by entering more questions and receiving answers from JARVIS.

  

6. JARVIS will provide informative and helpful answers based on the queries you enter.

   

7. Explore various topics and questions with JARVIS, and enjoy the lightning-fast responses provided by the AI chat assistant.

   

8. Feel free to experiment and interact with JARVIS to get answers and information on a wide range of subjects.

  

Note: Make sure you have your OpenAI API key set up correctly in the `.env` file before running the application.

## Files

- `main.py`: This file contains the Flask server implementation. It handles the API endpoint for receiving user queries and returning AI-generated responses.

- `index.html`: This HTML file defines the structure and layout of the chat interface. It includes CSS styles and JavaScript code for interacting with the API.

- `script.js`: This JavaScript file contains the logic for sending user queries to the server and displaying the responses in the chat interface.

- `api.js`: This JavaScript file contains additional API-related functionality for sending user queries to the server.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

