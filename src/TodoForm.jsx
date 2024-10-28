export default function TodoForm({ addTask, todoData, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="task">Task: </label>
        <input
          type="text"
          name="task"
          id="task"
          onChange={addTask}
          value={todoData.task}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
