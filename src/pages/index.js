import React from 'react';

import Task from '../components/Task/Task'

const HomePage = () => (
    <Task  title="Tarea 2" date={new Date()} tags='Frontend' priority='Alta' />
);

export default HomePage;
