import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Use the correct model here
});

// Simple in-memory storage to track if a user is new or has interacted before.
// In a real-world scenario, this should be stored in a database or session management system.
const userChats = {};

export async function POST(req) {
    try {
        const { message, userId } = await req.json();
        if (!message || !userId) {
            return new Response(
                JSON.stringify({ error: "Message and userId are required." }),
                { status: 400 }
            );
        }

        console.log("Received message:", message);

        // Check if the user is new (no previous chat)
        if (!userChats[userId]) {
            userChats[userId] = true; // Mark the user as interacted
            return new Response(
                JSON.stringify({ reply: "Hi, I'm Wingman AI Assistant! How can I help you today?" }),
                { status: 200 }
            );
        }

        // Handle product-related and e-commerce queries
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("product") || lowerCaseMessage.includes("ecommerce") || lowerCaseMessage.includes("buy")) {
            // You can integrate more sophisticated product-related AI responses here
            const result = await model.generateContent(message);
            console.log("Gemini API Response:", result);

            const generatedText = await result.response.text();
            return new Response(
                JSON.stringify({ reply: generatedText }),
                { status: 200 }
            );
        }

        // Default response for other queries
        return new Response(
            JSON.stringify({
                reply: "I'm Wingman's assistant. I'm unable to give other replies. I only provide answers related to e-commerce and product details.",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error generating response:", error);
        return new Response(
            JSON.stringify({ error: "Failed to generate response." }),
            { status: 500 }
        );
    }
}
