const imageResizer = require('./imageResizer');
const bufferImageResizer = require('./bufferImageResizer');

const LARGE_WIDTH = 1024;
const LARGE_HEIGHT = 1024;
const MEDIUM_WIDTH = 200;
const MEDIUM_HEIGHT = 500;
const SMALL_WIDTH = 200;
const SMALL_HEIGHT = 200;


const fs = require('fs');
const inputBuffer = fs.readFileSync('./img/square.jpg');
bufferImageResizer.resizeImages(inputBuffer, )

// imageResizer.generate3SizeImages('./img/portrait.jpg')