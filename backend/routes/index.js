var express = require('express');
var router = express.Router();
var AWS = require ( 'aws-sdk');
var multer = require ('multer')


const s3 = new AWS.S3();

AWS.config.update(
    {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        subregion: 'us-west-2',
    });
const upload = multer({
    storage: multer.memoryStorage(),
    // file size limitation in bytes
    limits: { fileSize: 52428800 },
});
router.post('/upload', upload.single('theseNamesMustMatch'), (req, res) => {
    // req.file is the 'theseNamesMustMatch' file
    s3.putObject({
        Bucket: 'your-bucket-name',
        Key: 'your-key-name',
        Body: req.file.buffer,
        ACL: 'public-read', // your permisions
    }, (err) => {
        if (err) return res.status(400).send(err);
        res.send('File uploaded to S3');
    })
});
module.exports = router;
