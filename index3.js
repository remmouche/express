import express from "express";
import router from "./router/userRouter.js";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Salam Alikoum");
});

app.use("/user", router);

app.post("/users", express.json(), (req, res) => {
	const { name, email } = req.body;
	console.log(req.body);
	// res.send("Post");
});

app.listen(PORT, () => {
	console.log(`my app listening on port ${PORT}`);
});
