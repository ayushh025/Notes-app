import React from "react";

const Form = (prop) => {
  return (
    <form
      onSubmit={(e) => {
        prop.formHandler(e);
      }}
      className="flex flex-col lg:w-1/2 gap-4 p-10"
    >
      <h1 className="text-3xl font-bold">Add Notes</h1>
      <input
        type="text"
        value={prop.title}
        onChange={(e) => {
          prop.setTitle(e.target.value);
        }}
        placeholder="Enter Title"
        className="px-4 py-2 border-2 rounded outline-none font-medium"
      />
      <textarea
        onChange={(e) => {
          prop.setDesc(e.target.value);
        }}
        value={prop.desc}
        type="text"
        placeholder="Enter Descreption"
        className="px-4 py-2 border-2 rounded h-25 outline-none font-medium"
      />
      <button className="bg-white active:scale-98 text-black py-2 rounded font-medium">
        Add Note
      </button>
    </form>
  );
};

export default Form;
