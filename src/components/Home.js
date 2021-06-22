import { Link } from "react-router-dom";
import FutureList from "./FutureList";
import TodayList from "./TodayList";
const Home = () => {
  return (
    <div>
      <Link to={"/form"}>
        <button type="button" class="btn btn-outline-primary">
          New Task
        </button>
      </Link>
      <h3>Today</h3>
      <TodayList />
      <h3>Not Today</h3>
      <FutureList />
    </div>
  );
};
export default Home;
