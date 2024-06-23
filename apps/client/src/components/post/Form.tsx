import React, { useRef } from "react";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";

function Form() {
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (textRef.current) {
      console.log("Submitted text:", textRef.current.value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 fixed top-0 w-1/2"
    >
      <div className="flex items-center mb-4">
        <input
          type="text"
          ref={textRef}
          placeholder="What is happening?!"
          className="flex-grow p-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-blue-500">
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <ImageOutlinedIcon />
          </button>
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <GifBoxOutlinedIcon />
          </button>
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <FlatwareOutlinedIcon />
          </button>
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <TagFacesOutlinedIcon />
          </button>
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <CalendarMonthOutlinedIcon />
          </button>
          <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
            <AddLocationAltOutlinedIcon />
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default Form;
