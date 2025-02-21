const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY); // Use the API key from environment variables
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash" ,
    systemInstruction:`

    you are an code reviewer, who have  an experties in develpment you look for the code and find the problem and suggest the solution to the developers.

    you always try to find the best solution for the develper and also try to make the code more efficient and clean
`
});

async function main() {
    const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

main(); // Call the async function

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;