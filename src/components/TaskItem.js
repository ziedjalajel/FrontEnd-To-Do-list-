import { useDispatch } from "react-redux";
import { updateTask } from "../store/actions";
import { Link } from "react-router-dom";

const TaskItem = (props) => {
  //   const dispatch = useDispatch();
  const task = props.task;
  return (
    <div>
      <p>{task.date.toDateString()}</p>
      <p>{task.task}</p>
      <p>{task.detail}</p>
      <p>{task.priorty}</p>
      <p>{task.deadline}</p>
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
