// A simple redux store/actions/reducer implementation.
import { createStore } from 'redux';

// State "names" object
import { TaskStates } from '../states/';

// The actions are the "names" of the changes that can happen to the store.

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

// The action creators bundle action with the data required to execute them.
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.task.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action.
export const reducer = (state, action) => {
  const { ARCHIVE_TASK, PIN_TASK } = actions;
  switch (action.type) {
    case ARCHIVE_TASK:
      return taskStateReducer(TaskStates.TASK_ARCHIVED);
    case PIN_TASK:
      return taskStateReducer(TaskStates.TASK_PINNED);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server.

const defaultTasks = [
  { id: '1', title: 'Something', state: TaskStates.TASK_INBOX },
  { id: '2', title: 'Something more', state: TaskStates.TASK_INBOX },
  { id: '3', title: 'Something else', state: TaskStates.TASK_INBOX },
  { id: '4', title: 'Something again', state: TaskStates.TASK_INBOX },
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks });