const sharp = require('sharp');

const LARGE_WIDTH = 1024;
const LARGE_HEIGHT = 1024;
const MEDIUM_WIDTH = 200;
const MEDIUM_HEIGHT = 500;
const SMALL_WIDTH = 200;
const SMALL_HEIGHT = 200;

function generate3SizeImages(inputBuffer) {
    // Lage
    resizeImage(inputBuffer, LARGE_WIDTH, LARGE_HEIGHT);
    // Medium
    resizeImage(inputBuffer, MEDIUM_WIDTH, MEDIUM_HEIGHT);
    // Small
    resizeImage(inputBuffer, SMALL_WIDTH, SMALL_HEIGHT);
}

function resizeImage(inputBuffer, targetWidth, targetHeight) {
  // 이미지를 크롭하지않고 원본 비율을 유지한 상태로 뷰포트 사이즈를 꽉채우는 사이즈로 변경하기위한 로직.
  // 일반적으로 width, height를 둘다 넣어서 resize하면 그 사이즈로 사이즈 조절된 뒤 크롭된다.
  // 그렇기때문에 w/h ratio를 비교해서 w와 h중 하나를 선택해서 resize하고 나머지는 자동으로 원본 비율에 맞춰지도록 했다.

  sharp(inputBuffer)
    .metadata()
    .then(metadata=>{
      const originWidth = metadata.width;
      const originHeight = metadata.height;
      const originWidthHeightRatio = originWidth / originHeight;
      const targetWidthHeightRatio = targetWidth / targetHeight;

      let size
      if (targetWidthHeightRatio > originWidthHeightRatio) {
        size = { width: targetWidth };
      } else {
        size = { height: targetHeight };
      }
      
      sharp(inputBuffer)
        .resize(size)
        .toBuffer()
        .then( data => { console.log("이미지가 성공적으로 리사이즈 되었습니다. data: ", data) })
        .catch( err => { console.error(err) });
    })
    .catch(error => {
      console.error(error);
    });
    
}

module.exports = {
  generate3SizeImages,
  resizeImage
};