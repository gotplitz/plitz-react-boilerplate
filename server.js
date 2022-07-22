const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');
const cors = require('cors');

// Declaring express server
const app = express();
app.use(cors());

// File path for production
let filesPath = path.join(__dirname, 'client/build');

// Express settings and middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ extended: false }));

app.use(
	'/',
	expressStaticGzip(filesPath, {
		index: false,
		enableBrotli: true,
		orderPreference: ['br', 'gz'],
	})
);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5085;

app.listen(PORT, () => console.log(`Plitz7 Node Server started on ${PORT}`));
