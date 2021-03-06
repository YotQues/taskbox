// import React from 'react';

// import Task from '../Task';

// interface TaskInterface {
//   id: number;
//   title: string;
//   state: string;
// }

// interface TaskListProps {
//   loading: boolean;
//   tasks: TaskInterface[];
//   onPinTask: () => void;
//   onArchiveTask: () => void;
// }

// const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }: TaskListProps) => {
//   const events = {
//     onPinTask,
//     onArchiveTask
//   }

//   if (loading) {
//     return <div className="list-items">loading</div>;
//   }

//   if (tasks.length === 0) {
//     return <div className="list-items">empty</div>;
//   }

//   return (
//     <div className="list-items">
//       {tasks.map(task => (
//         <Task key={task.id} task={task} {...events} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;