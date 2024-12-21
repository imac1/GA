import Tasks from "./components/Tasks";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
    const [tasks, setTasks] = useState([
        "Learn to Fly",
        "Rescue Kids",
        "Defeat Hook",
        "Go Back to London",
    ]);
    const [input, setInput] = useState("");

    const addTask = () => {
        let trimmedInput = input.trim();
        if (trimmedInput !== "") {
            setTasks([...tasks, trimmedInput]);
            setInput(""); 
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const removeTask = (index) => {
        let list = [...tasks];
        list.splice(index, 1);
        setTasks(list);
    };


    return (
        <div className="app">
            <Input handleChange={handleChange} addTask={addTask} input={input} />
            <Tasks tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default App;
