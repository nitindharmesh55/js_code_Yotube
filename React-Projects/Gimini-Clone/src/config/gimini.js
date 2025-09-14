import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-001"; // Updated model name
const API_KEY = "AIzaSyDc0uL849jbcNV6K7runPPQPMSE0NzayWU"; // Replace with your actual API key

async function runChat(prompt) {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_BLOCK_HIGH,
            },
        ];

        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [],
        });

        const result = await chat.sendMessage(prompt);
        const response = result.response;
        console.log(response.text());
        return response.text(); // Return text so you can use it in React
    } catch (error) {
        console.error("Error in runChat:", error);
        return "Error: Unable to fetch response.";
    }
}

export default runChat;
