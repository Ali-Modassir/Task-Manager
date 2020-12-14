import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";

const TaskManger = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header name="Task Manager" />
        <div className="main">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskManger;
