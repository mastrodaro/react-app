import React from "react";
import {
  useCreateTaskMutation,
  useGetTasksQuery,
} from "@/store/services/tasks";

const Tasks = () => {
  const { data: tasks, isLoading } = useGetTasksQuery(null, {
    pollingInterval: 3000,
  });
  const [createTask, { isLoading: isCreating }] = useCreateTaskMutation();

  return (
    <div>
      {isLoading && <p>LOADING</p>}
      {isCreating && <p>CREATING</p>}
      {tasks &&
        tasks.map((task) => (
          <div key={task.id}>
            <p>Id: {task.id}</p>
            <p>Name: {task.name}</p>
            <p>Desc: {task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))}
      <button
        onClick={() =>
          createTask({
            name: "My first task",
            description: "Plan another tasks",
          })
        }
      >
        create
      </button>
    </div>
  );
};

export default Tasks;
