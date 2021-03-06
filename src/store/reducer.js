import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASK,
  UPDATE_TASK,
  FINISHED_TASK,
} from "./actions";

// import tasksData from "../tasks";
// import slugify from "slugify";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    case UPDATE_TASK:
      const { updatedTask } = action.payload;
      // updatedTask.slug = slugify(updatedTask.task);
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    case ADD_TASK:
      const { newTask } = action.payload; // this is the same as newProduct = action.payload.newProduct
      // newTask.id = state.tasks[state.tasks.length - 1].id + 1;
      // newTask.slug = slugify(newTask.task);

      //   let todayTask = [...state.tasks];
      //   newTask.date.forEach((id) =>
      //     todayTask.map((task) => {
      //       if (task.id === id && task.date > new Date()) {
      //         task.done = false;
      //       }
      //     })
      //   );
      //   let futureTask = [...state.tasks];
      //   newTask.date.forEach((id) =>
      //     futureTask.map((task) => {
      //       if (task.id === id) {
      //         task.done = true;
      //       }
      //     })
      //   );
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };
    case FINISHED_TASK:
      const doneTask = action.payload; // this is the same as newProduct = action.payload.newProduct
      // let finishTask = [...state.tasks];
      // doneTask.done.forEach((id) =>
      //   finishTask.map((task) => {
      //     if (task.id === id) {
      //       task.done = true;
      //     }
      //   })
      // );
      return {
        ...state,
        tasks: [doneTask, ...state.tasks],
      };
    default:
      return state;
  }
};

export default reducer;
