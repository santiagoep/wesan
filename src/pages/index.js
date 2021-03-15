import React from 'react';

import Task from '../components/Task/Task'
import TaskDetail from '../components/TaskDetail/TaskDetail'

const HomePage = () => (
    <>
    <Task  title="Tarea 2" date={new Date()} tags='Frontend' priority='hight' />
    <TaskDetail title="Tarea 2" date={new Date()} tags='Frontend' priority='low' />
    </>
);

export default HomePage;
