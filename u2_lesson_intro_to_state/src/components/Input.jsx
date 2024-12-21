const Input = ({ handleChange, addTask, input }) => {
  return (
      <div>
          <input
              type="text"
              value={input}
              onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
      </div>
  );
};

export default Input;
