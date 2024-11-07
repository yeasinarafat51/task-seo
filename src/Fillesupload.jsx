import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './components/Modal';


const FilesUpload = () => {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  // Fetch the attachment count on mount
  useEffect(() => {
    axios.get('http://localhost:8000/attachments/count')
      .then(response => setCount(response.data.count))
      .catch(error => console.error("Error fetching count:", error));
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
    setShowModal(true);
  };

  // Handle file upload
  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach(file => formData.append('files', file));

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFiles(response.data.files); // Update file list
      setCount(response.data.count); // Update file count
      setShowModal(false); // Close modal
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">File Upload</h1>
      <input type="file" multiple onChange={handleFileChange} className="mb-4" />
      <p>Total Attachments: {count}</p>
      
      {/* Display list of uploaded files */}
      <ul className="mt-4">
        {files.map((file, index) => (
          <li key={index} className="bg-gray-200 p-2 mb-2">
            {file.originalName} - {file.extension}
          </li>
        ))}
      </ul>

      {/* Modal for file preview before upload */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-lg font-semibold mb-2">Selected Files</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-4">
            Upload Files
          </button>
        </Modal>
      )}
    </div>
  );
};

export default FilesUpload;
