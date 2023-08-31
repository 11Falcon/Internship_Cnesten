from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow all CORS requests

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif','nii'}  # Add more allowed extensions
ALLOWED_EXTENSIONS_model = {'png', 'jpg', 'jpeg', 'gif','nii'}  # Add more allowed extensions

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
def allowed_file_model(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_model

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']
    if file.filename == '':
        return 'No selected file'

    if file and allowed_file(file.filename):
        # Save the uploaded file to the current directory
        # file.save(os.path.join(app.root_path, file.filename)) #file.filename to replace it with the path of the data.
        return 'File uploaded and processed successfully'
    else:
        return 'File type not allowed'
@app.route('/uploadModal', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']
    if file.filename == '':
        return 'No selected file'

    if file and allowed_file_model(file.filename):
        # Save the uploaded file to the current directory
        # file.save(os.path.join(app.root_path, file.filename)) #file.filename to replace it with the path of the data.
        return 'File uploaded and processed successfully'
    else:
        return 'File type not allowed'

if __name__ == '__main__':
    app.run(debug=True)

