export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
// export const FETCH_PRODUCTS = "FETCH_PRODUCTS ";

// ACTIONS
export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: { taskId: taskId },
  };
};

export const updateTask = (updatedTask) => {
  return { type: UPDATE_TASK, payload: { updatedTask: updatedTask } };
};
// export const fetchProducts = async () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get("http://localhost:8000/products");
//       console.log(res.data);
//       dispatch({
//         type: FETCH_PRODUCTS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };
