const express = require("express");
const bodyParser = require("body-parser");
const store = require("store2");

const router = express.Router();
const app = express();

// DISABLE CORS POLICY 
app.use(function( req, res, next ) {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Allow-Headers", "x-requested-with, content-type, x-access-token");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header('Access-Control-Expose-Headers', 'x-access-token');
	res.header("Access-Control-Max-Age", "1000000000");

	if('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else { 
		next(); 
	}
});

// CONFIG EXPRESS
app.use(express.json());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
// SETAR OS ITENS SEPARADOS NA STORE
router.post('/password-cards', (req, res) => {
    const { url } = req.body;
    const { siteName } = req.body;
    const { userName } = req.body;
    const { password } = req.body;
    
    store.set(siteName, { url, siteName, userName, password });
    console.log(store.getAll());
});

router.get('/password-cards', (req, res) => {
	console.log('caiu get');
	res.send(store.getAll());
});

app.listen(5000, () => {
    console.log("Started on PORT 5000");
});
