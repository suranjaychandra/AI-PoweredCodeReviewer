const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => { 

    const code = res.body.code;

    if (!code) {
        return res.status(400).send("prompt is required");
    }

    const response = await aiService(code); 
}