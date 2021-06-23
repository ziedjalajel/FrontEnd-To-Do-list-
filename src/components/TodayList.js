import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";

const TodayList = (props) => {
  const today = new Date();
  const tasks = useSelector((state) => state.tasks);
  let todayTask = tasks
    .filter((task) => {
      task.date = new Date(task.date);
      return (
        task.date.getFullYear() === today.getFullYear() &&
        task.date.getMonth() === today.getMonth() &&
        task.date.getDate() === today.getDate() &&
        !(task.done === true)
      );
    })
    .map((task) => <TaskItem task={task} key={task.id} />);

  return <div>{todayTask}</div>;
};
export default TodayList;
