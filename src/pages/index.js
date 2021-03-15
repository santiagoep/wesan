import React from 'react';

import Task from '../components/Task/Task'


const HomePage = () => (
  <>
    <Task title="Tarea 1" date={new Date()} tags={['Frontend', 'Cuenta de usuario']} priority='medium' />
  </>
);

export default HomePage;
