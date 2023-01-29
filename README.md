# image-to-webp

Convert Image (JPG/PNG) to WebP for good compression and better performance. Resulting in faster website load.

### Example

```javascript
const { imageToWebp } = require("image-to-webp");

const outputFile = await imageToWebp({
    imagePath: "./myimg.jpeg",
    quality: 80,
});

console.log(outputFile);
```

### Options

1. **imagePath**:
provide string image path here, you can provide the temporary uploaded image path which is returned by packages like [Formidable](https://www.npmjs.com/package/formidable) or [Multer](https://www.npmjs.com/package/multer).

2. **quality**: it accept number value from 0-100, 0 (For high compression and lossy image), 100 (Less compression). Defult value is 80.


`imageToWebp()` function returns the path of Converted WebP image. this package stores all images to temporary folder. so using returned path by this method, either you can move the image from `tmp` directory to public directory in your backend or upload it to any cloud storage provider such as AWS S3.