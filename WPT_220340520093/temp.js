
const express = require('express');
const app = express();

const mysql = require('mysql2');

// JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'wptexam',
	password: 'cdac',
	database: 'wpt',
	port: 3306
});

app.use(express.static('abc'));


app.get('/getInfo', function (req, res) {
	// console.log("reading input " + req.query.xyz);
	let bookid = req.query.bookid;
	let output = {
		status: false,
		book: {
			bookid: 0,
			bookname: "",
			price: 0
		}
	};
	connection.query('select * from book where bookid=?',
		[bookid], (err, rows) => {
			if (err) {
				console.log("Error occured");
			} else {
				if (rows.length > 0) {
					output.status = true;
					output.book.bookname = rows[0].bookname;
					output.book.price = rows[0].price;

				}
				else {
					output.status = false;
					console.log("Book id not found.")
				}
			}
			res.send(output);
		}
	);

});

app.get('/updateInfo', function (req, res) {

	let bookid = req.query.bookid;

	let output = {
		status: false,
		book: {
			bookid: 0,
			bookname: "",
			price: 0
		}
	};
	connection.query('update book set price = ?  where bookid=?',
		[price, bookid], (err, rows) => {
			if (err) {
				console.log("Error occured");
			} else {
				if (rows.affectedRows===0) {
					output.status = false;
					console.log("Book id not found.")
				
				}
				else {
					output.status = true;
					console.log("Updated..!!")
				}
			}
			res.send(output);
		}
	);

});

app.listen(8081, function () {
	console.log("server listening at port 8081...");
});