
const express= require('express');
const app = express();
const Tesseract= require('tesseract.js')
const sharp= require('sharp')
const cors= require('cors')
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// setting
async function solve_image(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const contentType = res.headers['content-type'];
        let rawData = [];
        res.on('data', (chunk) => {
          rawData.push(chunk);
        });
        res.on('end', async () => {
          rawData = Buffer.concat(rawData);
          const preprocessedImage = await sharp(rawData)
            .grayscale()
            .toBuffer();
          const result = await Tesseract.recognize(preprocessedImage);
          resolve(result.text);
        });
      }).on('error', (e) => {
        reject(`Error downloading image: ${e.message}`);
      });
    });
  }
app.set("port", 4000);
app.post("/solve",function(req,res){
    const {image}=req.body
    console.log(`got a solve request for ${image}`)
 solve_image(image).then((text)=>{
    console.log(text);
    res.send({"hel":text})});
})


app.listen(app.get("port"));

console.log("Server on port", app.get("port"));

// export default app;
