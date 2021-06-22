import "../App.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateTask, addTask } from "../store/actions";

const Form = () => {
  const taskSlug = useParams().taskSlug;
  const Tasks = useSelector((state) => state.tasks);
  const updatedTask = Tasks.find((t) => t.slug === taskSlug);
  console.log(taskSlug);
  const [toDo, setToDo] = useState(
    updatedTask ?? {
      task: "",
      detail: "",
      priority: "",
      category: "",
      date: new Date(),
    }
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setToDo({ ...toDo, [event.target.name]: event.target.value });
  };
  const handleChangeDate = (value) => {
    setToDo({ ...toDo, date: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedTask) dispatch(updateTask(toDo));
    else dispatch(addTask(toDo));
    history.push("/");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Task
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Enter A New Task"
          class="col-4"
          name="task"
          value={toDo.task}
          onChange={handleChange}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Details
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Task Details"
          class="col-4"
          name="detail"
          value={toDo.detail}
          onChange={handleChange}
        />
      </div>
      <div class="input-group">
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          class="col-4"
          name="priority"
          defaultValue={toDo.priority}
          onChange={handleChange}
        >
          <option value="">Priority</option> {/* not done */}
          <option value="High">High</option>
          <option value="Middle">Middle</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div class="input-group">
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          class="col-4"
          name="category"
          defaultValue={toDo.category}
          onChange={handleChange}
        >
          <option value="">category</option>
          {/* not done */}
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
      </div>
      <Calendar onChange={handleChangeDate} value={toDo.date} />
      <button type="submit" class="btn btn-outline-success">
        {updatedTask ? "Update" : "Submit"}
      </button>
    </form>
  );
};
export default Form;
