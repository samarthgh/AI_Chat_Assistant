const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

app.post("/templates/index.htmls/api/openai", async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { promptInput } = req.body;

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: promptInput }]
    });

    res.json(response.data);
});

app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
