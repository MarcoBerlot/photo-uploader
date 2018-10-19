var express = require('express');
var router = express.Router();
var AWS = require ( 'aws-sdk');
var multer = require ('multer');

// Configuration Credentials
const CONFIG = require("../config.json");

const timestamp = JSON.stringify(new Date())
const s3 = new AWS.S3();

AWS.config.update(
    {
        accessKeyId: CONFIG.AWS_ACCESS_KEY_ID,
        secretAccessKey: CONFIG.AWS_SECRET_ACCESS_KEY,
        subregion: CONFIG.REGION,
    });
const upload = multer({
    storage: multer.memoryStorage(),
    // file size limitation in bytes
    limits: { fileSize: 52428800 },
});
router.post('/upload', upload.single('theseNamesMustMatch'), (req, res) => {
    // req.file is the 'theseNamesMustMatch' file
    // saves timestamp as filename
    s3.putObject({
        Bucket: CONFIG.S3_BUCKET,
        Key: timestamp,
        Body: req.file.buffer,
        ACL: 'public-read', // your permisions
    }, (err) => {
        if (err) return res.status(400).send(err);
        res.send('File uploaded to S3');
    })
});
module.exports = router;
