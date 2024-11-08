import { useState } from "react";
import { SiBookstack } from "react-icons/si";
import { MdConfirmationNumber, MdOutlineDateRange } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiAttachment2 } from "react-icons/ri";
import { Modal } from "./Modal";
import axios from "axios";
import img1 from '../assets/yeasin.png'
import img2 from '../assets/yeasin23.png'

const FileUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(0);
  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFileCount(response.data.count); // Update the count
      setFiles([]); // Clear file selection
      closeModal();
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  const datas = [
    {
      color: "bg-red-400",
      title: "Incomplete",
      id: 1,
    },
    {
      color: "bg-cyan-400",
      title: "To Do",
      id: 2,
    },
    {
      color: "bg-yellow-400",
      title: "Doing",
      id: 3,
    },
    {
      title: "Under Review",
      id: 4,
    },
    {
      title: "Incomplete",
      id: 5,
    },
  ];
 


  return (
    <div className=" bg-[#f2f2f2] overflow-x-auto h-screen  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 flex p-4 space-x-4">
      {datas.map((data) => (
        <div
          key={data.id}
          className="h-screen   overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 p-4 "
          style={{ minWidth: "400px" }}
        >
          
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`${data.color} rounded-s-full `}
                style={{ height: "20px", width: "20px" }}
              ></div>
              <div>
                <p className="font-semibold">{data.title}</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2]">
              <p className="font-semibold shadow rounded-md p-2">0</p>
            </div>
          </div>
          <div className="mt-4 space-y-4 ">
            {Array.from({ length: 10 }).map((_, itemIndex) => (
              <div key={itemIndex} className="text-sm text-gray-700">
                <div className="space-y-2 shadow p-2 bg-white">
                  <div className="flex items-center justify-between">
                    {/* part1 */}
                    <div className="flex items-center ">
                      <img
                        className="w-[30px] rounded-full mx-2"
                        src={img1}
                        alt=""
                      />
                      <p className="font-medium">Client Name</p>
                    </div>
                    <div className="flex items-center ">
                      <img
                        className="w-[30px] rounded-full mx-2"
                        src={img2}
                        alt=""
                      />
                      <p className="font-medium">Sadik Istiak</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mx-2">
                    {/* part2 */}
                    <div className="flex items-center space-x-2">
                      <SiBookstack />
                      <p>Lorem ipsum dolor sit amet curn ...</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdConfirmationNumber />
                      <p>1/2</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* part3 */}
                    <img
                      className="w-[30px] rounded-full mx-2"
                      src={img2}
                      alt=""
                    />
                    <img
                      className="w-[30px] rounded-full mx-2"
                      src={img1}
                      alt=""
                    />
                    <p>12 +</p>
                    <div className="flex items-center space-x-2">
                      <TiMessages />
                      <p>15</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={openModal} className="">
                        <RiAttachment2 />
                      </button>{" "}
                      {isModalOpen && (
                        // Madal
                      <Modal closeModal={closeModal} files={files} setFiles={setFiles} handleUpload={handleUpload} />
                        )}
                      <p>{files.length}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineDateRange />
                      <p>30-12-2022</p>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FileUpload;
