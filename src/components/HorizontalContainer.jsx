import { SiBookstack } from "react-icons/si";
import { MdConfirmationNumber,MdOutlineDateRange } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiAttachment2 } from "react-icons/ri";


const FileUpload = () => {
    return (
        <div className="overflow-x-auto h-screen  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 flex p-4 space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="h-full   overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 p-4 "style={{ minWidth: "400px" }}
              
            >
              <h2 className="text-lg font-bold">Card {index + 1}</h2>
              <div className="mt-4 space-y-4 ">
                {Array.from({ length: 40 }).map((_, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-700">
                    <div className="space-y-2 shadow p-2 ">
                        <div className="flex items-center justify-between">
                            {/* part1 */}
                            <div className="flex items-center ">
                               <img className="w-[30px] rounded-full mx-2" src="/public/yeasin.png" alt="" />
                               <p className="font-medium">Client Name</p>
                            </div>
                            <div className="flex items-center ">
                               <img className="w-[30px] rounded-full mx-2" src="/public/yeasin23.png" alt="" />
                               <p className="font-medium">Client Name</p>
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
                            <img className="w-[30px] rounded-full mx-2" src="/public/yeasin.png" alt="" />
                            <img className="w-[30px] rounded-full mx-2" src="/public/yeasin.png" alt="" />
                            <p>12 +</p>
                            <div className="flex items-center space-x-2">
                            <TiMessages />
                            <p>15</p>

                            </div>
                            <div className="flex items-center space-x-2">
                            <RiAttachment2 />
                            <p>25</p>
                            </div>
                            <div className="flex items-center space-x-2">
                            <MdOutlineDateRange />
                            <p>30-12-2022</p>
                            </div>

                        </div>
                    </div>
                    {/* Content Item {itemIndex + 1} */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    };
export default FileUpload;
