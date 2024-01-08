const sharp = require('sharp');

function resizeImages(inputBuffer, rects) {
  return rects.map(async rect => {
    return await resizeImage(inputBuffer, rect);
  });
}

async function resizeImage(inputBuffer, rect) {
  const resizedImageBuffer = await sharp(inputBuffer)
    .resize(rect.width, rect.height, {
      fit: 'outside'
    })
    .toBuffer();

  return resizedImageBuffer;
}

module.exports = {
  resizeImages,
  resizeImage
};