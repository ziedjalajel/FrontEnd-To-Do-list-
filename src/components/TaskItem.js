import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/actions";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");
const TaskItem = (props) => {
  const dispatch = useDispatch();
  const task = props.task;
  return (
    // || (task.done < new Date() && props.nottoday)
    <div>
      {task.done ? (
        ""
      ) : (
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() => dispatch(updateTask({ ...task, done: true }))}
          />
        </div>
      )}
      {task.date < new Date() && props.nottoday ? (
        ""
      ) : (
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          type="button"
          class="btn-close"
          aria-label="Close"
        ></button>
      )}

      <p>Task Date :{task.date.toDateString()}</p>
      <p>Task :{task.task}</p>
      <p>Detail :{task.detail}</p>
      <p>Priority :{task.priority}</p>
      <p>Category :{task.category}</p>
      {props.nottoday ? <p>Deadline : {timeAgo.format(task.date)}</p> : ""}

      <Link to={`/form/${task.slug}/update`}>
        {task.date < new Date() && props.nottoday ? (
          ""
        ) : (
          <button type="button" class="btn btn-outline-warning">
            Update
          </button>
        )}
      </Link>
      <hr />
    </div>
  );
};
export default TaskItem;
