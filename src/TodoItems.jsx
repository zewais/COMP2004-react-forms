export default function TodoItems({ todoList, onClick }) {
  const color = (checked) => (checked ? { color: "red" } : { color: "green" });
  return (
    <div>
      {todoList.map((i) => (
        <div key={i.id}>
          <span key={i.id} style={color(i.checked)}>
            {i.task}
          </span>
          <button onClick={() => onClick(i.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
