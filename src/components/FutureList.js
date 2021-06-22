import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";

const FutureList = () => {
  const today = new Date();
  const tasks = useSelector((state) => state.tasks);
  let futureTask = tasks
    .filter(
      (task) =>
        !(
          task.date.getFullYear() === today.getFullYear() &&
          task.date.getMonth() === today.getMonth() &&
          task.date.getDate() === today.getDate()
        )
    )
    .map((task) => <TaskItem task={task} key={task.id} />);

  return <div>{futureTask}</div>;
};
export default FutureList;
