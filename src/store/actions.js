import axios from "axios";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FINISHED_TASK = "FINISHED_TASK";
export const FETCH_TASK = "FETCH_TASK ";

// ACTIONS
export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/tasks", newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId: taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/tasks/${updatedTask.id}`,
        updatedTask
      );
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8080/tasks");
      console.log(res.data);
      dispatch({
        type: FETCH_TASK,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const finisheTask = (finishedTask) => {
  return { type: FINISHED_TASK, payload: { finishedTask: finishedTask } };
};
