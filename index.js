import express from "express";
import bodyParser from "body-parser";
var tasks = ["Buy elephant", "Buy milk", "Work hard"];
var workList = ["Wash flow", "Go gym"];
var toworowList = ["Cross fit", "Dig patotas"];

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("index.ejs", {tasks: tasks});
    console.log(req.url);
});

app.get('/ToDo', (req, res) => {
    res.render("index.ejs", {tasks: tasks});
    console.log(req.url);
});

app.get('/Work', (req, res) => {
    res.render("index.ejs", {tasks: workList});
});

app.get('/Tomorow', (req, res) => {
    res.render("index.ejs", {tasks: toworowList});
});

app.post("/Tomorow", (req, res) => {
    var task = req.body["task"];
    toworowList.push(task);
    res.render("index.ejs", {tasks: toworowList});
});

app.post("/Work", (req, res) => {
    var task = req.body["task"];
    workList.push(task);
    res.render("index.ejs", {tasks: workList});
});

app.post("/ToDo", (req, res) => {
    var task = req.body["task"];
    tasks.push(task);
    res.render("index.ejs", {tasks: tasks});
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})