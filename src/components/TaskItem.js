import { useDispatch } from "react-redux";
import { updateTask, deleteTask, finisheTask } from "../store/actions";
import { Link } from "react-router-dom";

const TaskItem = (props) => {
  const dispatch = useDispatch();
  const task = props.task;
  return (
    <div>
      <div class="form-check">
        {/* <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={() => dispatch(deleteTask(task.id))}
        />
        <label class="form-check-label" for="flexCheckDefault"></label> */}

        <button onClick={() => dispatch(finisheTask(task.id))}>finished</button>

        <button
          onClick={() => dispatch(deleteTask(task.id))}
          type="button"
          class="btn-close"
          aria-label="Close"
        ></button>
        {/* <button onClick={() => dispatch(deleteTask(task.id))}>delete</button> */}
      </div>
      <p>Task Date :{task.date.toDateString()}</p>
      <p>Task :{task.task}</p>
      <p>Detail :{task.detail}</p>
      <p>Priority :{task.priorty}</p>
      <p>Deadline :{task.deadline}</p>
      <p>Category :{task.category}</p>

      <Link to={`/form/${task.slug}/update`}>
        <button type="button" class="btn btn-outline-warning">
          Update
        </button>
      </Link>
      <hr />
    </div>
  );
};
export default TaskItem;
