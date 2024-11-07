/* eslint-disable react/prop-types */
// import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export function Modal({ closeModal, files, setFiles, handleUpload }) {
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold">Pick Attachment: {files.length}</h2>
        
        <input type="file" multiple onChange={handleFileChange} className="mb-4" />
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded">
              {file.name} ({file.name.split('.').pop()})
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-end space-x-2">
          
          <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
}
