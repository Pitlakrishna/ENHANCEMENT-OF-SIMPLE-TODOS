// Write your code here

const TodoItem = props => {
  const {todoDetailes, deleteItem} = props
  const {id, title} = todoDetailes
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
