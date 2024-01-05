const imageResizer = require('./imageResizer');
const bufferImageResizer = require('./bufferImageResizer');

// const fs = require('fs');
// const inputBuffer = fs.readFileSync('./img/square.jpg');
// bufferImageResizer.generate3SizeImages(inputBuffer)

imageResizer.generate3SizeImages('./img/portrait.jpg')