const sharp = require('sharp');

const LARGE_WIDTH = 1024;
const LARGE_HEIGHT = 1024;
const MEDIUM_WIDTH = 200;
const MEDIUM_HEIGHT = 500;
const SMALL_WIDTH = 200;
const SMALL_HEIGHT = 200;

function generate3SizeImages(inputPath) {
    // Lage
    resizeImage(inputPath, './img/output/output_large.jpg', LARGE_WIDTH, LARGE_HEIGHT);
    // Medium
    resizeImage(inputPath, './img/output/output_medium.jpg', MEDIUM_WIDTH, MEDIUM_HEIGHT);
    // Small
    resizeImage(inputPath, './img/output/output_small.jpg', SMALL_WIDTH, SMALL_HEIGHT);
}

function resizeImage(inputPath, outputPath, targetWidth, targetHeight) {
  sharp(inputPath)
    .resize(targetWidth, targetHeight, {
      // kernel: sharp.kernel.nearest, // default: lanczos3
      fit: 'outside'
    })
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log('이미지가 성공적으로 리사이즈되었습니다.', info);
      }
    });
}

// function calculateSize(metadata, targetWidth, targetHeight) {
//   if (shouldFitWidth(metadata, targetWidth, targetHeight)) {
//     return { width: targetWidth };
//   } else {
//     return { height: targetHeight };
//   }
// }

// function shouldFitWidth(metadata, targetWidth, targetHeight) {
//   const originWidth = metadata.width;
//   const originHeight = metadata.height;
//   const originWidthHeightRatio = originWidth / originHeight;
//   const targetWidthHeightRatio = targetWidth / targetHeight;

//   return targetWidthHeightRatio > originWidthHeightRatio;
// }

module.exports = {
  generate3SizeImages,
  resizeImage
};