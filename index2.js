import express from "express";
const app = express();
const port = 3000;

app.get("/student", (req, res) => {
	res.send("All Students");
});
app.post("/student", (req, res) => {
	res.send("Add new Student");
});
app.put("/student", (req, res) => {
	res.send("Update Student");
});
app.delete("/student", (req, res) => {
	res.send("Delete Student");
});

app
	.route("student")
	.get(() => res.send("All Students"))
	.post(() => res.send("Add new Student"))
	.put(() => res.send("Update Student"))
	.delete(() => res.send("Delete Student"));

app.listen(port, () => {
	console.log("App Started");
});
