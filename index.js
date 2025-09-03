import express from "express";
const app = express();
const port = 3000;

//basic routing
app.get("/", (req, res) => {
	res.send("<h1>Salam Alikoum ☀️</h1> ");
});

app.get("/about", (req, res) => {
	res.send("<h1>About Page 🚌</h1>");
});

app.get("/contact", (req, res) => {
	res.send("<h1>Contact Page 📞</h1>");
});

//Advanced Routing
//String Pattern Path
app.get(["/abc", "/abcd"], (req, res) => {
	res.send("if the user hit (abc) or (abcd) then this will run.");
});
//Regex
app.get(/x/, (req, res) => {
	res.send("<h1>If the path includes the letter (x) it will work.</h1>");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
	res.send(
		"<h1>If the path includes (users) with (/4 digits) it will work.</h1>"
	);
});
//Double Callback
app.get(
	"/double-callback",
	(req, res, next) => {
		console.log("First Callback");
		next();
	},
	(req, res) => {
		res.send("Second Callback");
	}
);
//Multiple Callback
const cb1 = (req, res, next) => {
	console.log("First Callback");
	next();
};

const cb2 = (req, res, next) => {
	console.log("Second Callback");
	next();
};
const cb3 = (req, res) => {
	res.send("Third Callback");
};
app.get("/multiple-callback", [cb1, cb2, cb3]);
//Chained Callbacks
app
	.route("/chained-callback") //.get(cb1, cb2, cb3)    //.post(cb1, cb2, cb3)
	.all(cb1, cb2, cb3);
//Route Parameters
app
	.get("/users/:id", (req, res) => {
		res.send(`User ID is: ${req.params.id}`);
	})
	.get("/users/:id/books/:bookId", (req, res) => {
		res.send(
			`User ID is: ${req.params.id} and Book ID is: ${req.params.bookId}`
		);
	});
//http://localhost:3000/users/10/books/12
//Start the server
app.listen(port, () => {
	console.log(`my app listening on port ${port}`);
});

// HTTP Methods
// GET: Retrieve Data
// POST:  Create/Insert Data
// PUT: Completely Update Data
// PATCH: Partially Update Data
// DELETE: Delete Data
// ALL: Any HTTP Request Method

