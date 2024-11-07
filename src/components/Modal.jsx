/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
export function Modal({ closeModal }) {
    return (
      <div className="fixed inset-0  flex items-center justify-center transition-opacity ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform scale-100">
        <div className="p-4">
        {/* <form action="http://localhost:8000" method="post" enctype="multipart/form-data">
      <input type="file" name="files" />
      <input className="text-black" type="submit" value="Submit" />
    </form> */}
        </div>
          <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 my-4 rounded">
            Close Modal
          </button>
        </div>
      </div>
    );
  }
  