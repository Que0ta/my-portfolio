import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

const TELEGRAM_API = process.env.API;
const client = process.env.CLIENT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
var currentPage = '';

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index.ejs');
});

app.get('/projects', (req,res) => {
    res.render('projects.ejs');
});

app.get('/about', (req,res) => {
    res.render('about.ejs');
});

app.get('/email', (req,res) => {
    res.render('email.ejs');
});

app.post('/send-email', async (req, res) => {

    try {
        const { name, email, message } = await req.body;
    
        const text = `📩 New Form Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;    
        await axios.post(TELEGRAM_API, {
            chat_id: client,
            text,
            parse_mode: "Markdown"
        });
        
        res.setHeader("Set-Cookie", "formStatus=success; Max-Age=10; Path=/;");
        res.redirect('/');
    } catch (err) {
        console.error("Error sending message:", err.message);
        // res.status(500).json({ success: false, error: "Failed to send" });
        res.redirect('/');
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});