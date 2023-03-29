
const express= require('express');
const app = express();
const tesseract= require('tesseract.js')
const sharp= require('sharp')

// setting
let image_link="";
app.set("port", 4000);
app.get("/solve/:input",function(req,res){
    image_link= req.params.input
    res.send(`hello ${image_link}`);
    console.log("got a solve request")
})
console.log(image_link)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/:name/:lastname',function(req,res){
res.send(`<p><b>hello</b> <i>world</i></p><br><p> name: ${req.params.name}<br> last: ${req.params.lastname}</p>`);
});

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));

// export default app;
