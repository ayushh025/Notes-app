import React from "react";
import { IoClose } from "react-icons/io5";

const Notes = (prop) => {
  return (
    <div className="p-10 lg:w-1/2 lg:border-l-1 h-screen flex flex-col">
      <h1 className="text-3xl font-bold">Your Notes</h1>
      <div className="flex flex-wrap items-start gap-5 mt-5 flex-1 overflow-auto">
        {prop.notes.map((note, idx) => (
          <div
            key={idx}
            className="h-50 w-40 rounded-2xl py-8 px-4 bg-white text-black relative"
          >
            <h2
              className="absolute top-3 right-3 bg-red-600 p-1 rounded-full text-white cursor-pointer"
              onClick={() => {
                prop.deleteNote(idx);
              }}
            >
              <IoClose size={20} />
            </h2>
            <h3 className="leading-tight text-xl font-bold">{note.title}</h3>
            <p className="mt-2 leading-tight text-gray-700 font-medium">
              {note.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
