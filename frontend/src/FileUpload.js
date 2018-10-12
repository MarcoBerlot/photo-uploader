import Dropzone from 'react-dropzone';
import upload from 'superagent'
const React = require('react');


class FileUpload extends React.Component{

    render(){
        function onDrop (files) {
            upload.post('/upload')
                .attach('theseNamesMustMatch', files[0])
                .end((err, res) => {
                    if (err) console.log(err);
                    alert('File uploaded!');
                })
        }
        return (
            <div>
                <Dropzone onDrop={onDrop}>
                    <div>Try dropping a file here, or click to select a file to upload.</div>
                </Dropzone>
            </div>
        );
    }
};

export default FileUpload;
