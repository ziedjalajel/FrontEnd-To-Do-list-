import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";

const FinishedTask = (props) => {
  //   const finishedSelector = useSelector((state) => state.tasks);
  // const today = new Date();
  const tasks = useSelector((state) => state.tasks);
  let finishTask = tasks
    .filter((task) => task.done)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return <div>{finishTask}</div>;
};
export default FinishedTask;
