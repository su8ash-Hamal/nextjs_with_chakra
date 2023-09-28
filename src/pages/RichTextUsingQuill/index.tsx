// components/TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill styles

const RichTextUsingQuill = () => {
    return (
        <ReactQuill
            value={"value"}
            onChange={() => {
                console.log("first")
            }}
            modules={{
                toolbar: {
                    container: [
                        [{ 'header': '2' }],
                        ['bold'],
                        ['list', 'bullet'],
                    ],
                },
            }}
        />
    );
};

export default RichTextUsingQuill;
