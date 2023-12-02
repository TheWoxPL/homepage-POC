import React from 'react';

// import { AppHeader } from '../components/AppHeader/AppHeader';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';
import { DynamicList } from '../components/DynamicList/DynamicList';
import { SimpleForum } from '../components/SimpleForm/SimpleForm';
import { TaskList } from '../components/TaskList/TaskList';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
    <DynamicList n={3} />
    <DynamicList n={5} />
    <TaskList
      listOfTasks={[
        { id: 1, text: 'Task 1', completed: true },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false },
        { id: 4, text: 'Task 4', completed: false }
      ]}
    />
    <SimpleForum />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
