import React from 'react';

import Task from '../components/Task/Task';
import Grid from '../components/Grid/Grid';
import Column from '../components/Column/Column';

const HomePage = () => (
    <>
        <Grid>
            <Column title="Backlog">
                <Task
                    title="Tarea 1"
                    date={new Date()}
                    tags={['Frontend', 'Cuenta de usuario']}
                    priority='medium'
                />

            </Column>
            <Column title="To Do"></Column>
            <Column title="In Progress">
                <Task
                    title="Tarea 1"
                    date={new Date()}
                    tags={['Frontend', 'Cuenta de usuario']}
                    priority='medium'
                />

            </Column>
            <Column title="Blocked"></Column>
            <Column title="Code Review">
                <Task
                    title="Tarea 1"
                    date={new Date()}
                    tags={['Frontend', 'Cuenta de usuario']}
                    priority='medium'
                />

                <Task
                    title="Tarea 1"
                    date={new Date()}
                    tags={['Frontend', 'Cuenta de usuario']}
                    priority='medium'
                />

            </Column>
            <Column title="Test"></Column>
            <Column title="Done"></Column>
        </Grid>

    </>
);

export default HomePage;
