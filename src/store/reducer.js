import {
  ADD_TASK,
  DELETE_TASK,
  // FETCH_PRODUCTS,
  UPDATE_TASK,
} from "./actions";

import tasksData from "../tasks";
import slugify from "slugify";

const initialState = {
  tasks: tasksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   case FETCH_PRODUCTS:
    //     return {
    //       ...state,
    //       products: action.payload,
    //     };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    case UPDATE_TASK:
      const { updatedTask } = action.payload;
      updatedTask.slug = slugify(updatedTask.task);
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    case ADD_TASK:
      const newTask = action.payload; // this is the same as newProduct = action.payload.newProduct
      newTask.id = state.tasks[state.tasks.length - 1].id + 1;
      newTask.slug = slugify(newTask.task);

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
    default:
      return state;
  }
};

export default reducer;
