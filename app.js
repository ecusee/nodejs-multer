const express = require('express');
const path = require('path');
const cors = require('cors');
const singleFileUpload = require('./singleUpload');
const multipleUpload = require('./multipleUpload');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/singleFileUpload', (req,res,next) => {
    try{
        singleFileUpload(req,res, function(err){
            if(err) {
                console.log('error', err);
            } else {
                res.json(req.file).status(200);
            }
        })
    } catch (e) {
        console.log('hata olustu')
    }
})

app.post('/multipleFileUpload', (req,res,next) => {
    try{
        multipleUpload(req,res, function(err){
            if(err) {
                console.log('error', err);
            } else {
                res.json(req.files).status(200);
            }
        })
    } catch (e) {
        console.log('hata olustu')
    }
})

module.exports = app;