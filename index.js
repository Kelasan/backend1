const express = require('express');

const app = express();

const handleHomereq = (req, res)=> {
    res.send("<h1>Welcome</h1>");
};

const handleLoginreq = (req, res)=> {
    res.send("Welcome");
};

const handleContactreq = (req, res) => {
    res.send("<h1>Welcome</h1>");
};

const handleAboutreq = (req, res) => {
    res.send("<h1>Welcome</h1>");
};

const handleErrorreq = () => {
    res.send("<h1>Oga</h1>")
}

app.post("/login", handleLoginreq);
app.get("/contact", handleContactreq);
app.delete("/about", handleAboutreq);
app.put("/", handleHomereq);
app.get("*", handleErrorreq);

app.listen("3000", () => {
    console.log("Here we are!");
});