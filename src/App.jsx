import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  const [addEditBtn, setAddEditBtn] = useState(true);
  const [editIndex, setEditIndex] = useState("");

  function inputHandler(e) {
    let val = e.target.value;
    setInputText(val);
  }

  function addTask() {
    if (inputText === "") {
      return;
    } else {
      let data = [...task, inputText];
      setTask(data);
      setInputText("");
    }
  }

  function dltTask(i) {
    let filtered = task.filter((_, ind) => ind !== i);
    setTask(filtered);
  }

  function editTask(i) {
    let editFilter = task.filter((_, ind) => ind == i);
    setInputText(editFilter);
    setAddEditBtn(false);
    setEditIndex(i);
  }

  function editConfirmHandler() {
   setTask(task.map((item, i) => (i === editIndex ? inputText : item)));
   setInputText("");
   setAddEditBtn(true);
  
  }

  return (
    <>
      <div className="h-full w-full flex items-center justify-center ">
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
          placeholder="Enter your Task here"
          className="placeholder:text-white outline-none mt-14 h-20 w-3/5 bg-purple-400 pl-10 text-2xl"
        />

        {addEditBtn ? (
          <button
            className=" mt-14 h-20 w-24 text-xl bg-green-600 text-white "
            onClick={addTask}
          >
            Add Task
          </button>
        ) : (
          <button
            className=" mt-14 h-20 w-24 text-xl bg-green-600 text-white "
            onClick={editConfirmHandler}
          >
            Edit Confirm
          </button>
        )}
      </div>

      {task.length > 0 &&
        task.map((item, i) => {
          return (
            <>
              <div
                className="h-full w-full flex items-center justify-center "
                key={i}
              >
                <div className="flex items-center outline-none mt-14 h-20 w-2/4 bg-purple-400 pl-10 text-2xl">
                <input type="checkbox" className="" />
                  <h2 className="pl-8">{item}</h2>
                </div>
                <button
                  className=" mt-14 h-20 w-24 text-xl bg-blue-700 text-white"
                  onClick={() => editTask(i)}
                >
                  Edit
                </button>
                <button
                  className=" mt-14 h-20 w-24 text-xl bg-red-600 text-white "
                  onClick={() => dltTask(i)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
    </>
  );
}

export default App;
