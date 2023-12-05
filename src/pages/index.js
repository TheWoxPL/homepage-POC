import React, { useState } from 'react';

// import { AppHeader } from '../components/AppHeader/AppHeader';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';
import { DynamicList } from '../components/DynamicList/DynamicList';
import { SimpleForum } from '../components/SimpleForm/SimpleForm';
import { TaskList } from '../components/TaskList/TaskList';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: true },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
    { id: 4, text: 'Task 4', completed: false }
  ]);

  const handleRemove = (oneTask) => {
    setTasks(tasks.filter((taskItem) => taskItem.id !== oneTask.id));
  };

  const handleToggle = (oneTask) => {
    setTasks(
      tasks.map((task) => {
        return task.id == oneTask.id
          ? { ...task, completed: !task.completed }
          : task;
      })
    );
  };

  return (
    <>
      <TitleText />
      <AppHeader />
      <CheckContent />
      <Counter />
      <DynamicList n={3} />
      <DynamicList n={5} />
      <TaskList
        tasks={tasks}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      />
      <SimpleForum />
    </>
  )
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
