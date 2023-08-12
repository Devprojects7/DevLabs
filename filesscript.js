const fileInput = document.getElementById('file');
const submitButton = document.getElementById('submit');
const uploadedFilesContainer = document.querySelector('.right');

// Load stored files from sessionStorage on page load
const storedFiles = JSON.parse(sessionStorage.getItem('uploadedFiles')) || [];
storedFiles.forEach(fileData => {
    displayUploadedFile(fileData.name, fileData.url);
});

submitButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        displayUploadedFile(file.name, fileUrl);
        storeUploadedFile(file.name, fileUrl);
    }
});

function displayUploadedFile(fileName, fileUrl) {
    const fileContainer = document.createElement('div');
    fileContainer.classList.add('uploaded-file');

    const fileLink = document.createElement('a');
    fileLink.href = fileUrl;
    fileLink.target = '_blank';
    fileLink.style.color = 'white';
    fileLink.textContent = fileName;

    fileLink.download = fileName;

    fileContainer.appendChild(fileLink);
    uploadedFilesContainer.appendChild(fileContainer);
}

function storeUploadedFile(fileName, fileUrl) {
    const storedFiles = JSON.parse(sessionStorage.getItem('uploadedFiles')) || [];
    storedFiles.push({
        name: fileName,
        url: fileUrl
    });
    sessionStorage.setItem('uploadedFiles', JSON.stringify(storedFiles));
}
