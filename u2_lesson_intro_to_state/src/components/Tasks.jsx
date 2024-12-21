const Tasks = ({ tasks, removeTask }) => {
  return (
      <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                  {task}
                  <button onClick={() => removeTask(index)}>x</button>
              </li>
          ))}
      </ul>
  );
};

export default Tasks;
