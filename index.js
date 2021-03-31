import express from 'express';
import arrayToObject from './arraysToObjects.js';

const app = express();
const port = process.env.PORT || 8000;

const testArray = ['tom', 'poep', 'hoofd'];

try {
    var functionTest = arrayToObject(testArray)
} catch (error) {
    console.error(error)
}

app.get("/", (req, res) => {
    res.send(functionTest)
  });
  
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
  