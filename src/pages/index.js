import React from 'react';

import Kanban from '../components/Kanban/Kanban';

const HomePage = ({ tasks, columns }) => (
    <Kanban tasks={tasks} columns={columns} />
);

export const getServerSideProps = () => {
    return {
        props: {
            tasks: [
                {
                    title: 'Tarea 1',
                    date: '2021-03-15',
                    tags: ['Frontend', 'UI'],
                    priority: 'hight',
                    state: 'backlog',
                    description: 'HAY QUE HACER UNA TAREA'
                },
                {
                    title: 'Tarea 2',
                    date: '2021-03-18',
                    tags: ['Frontend', 'UI'],
                    priority: 'low',
                    state: 'to-do'
                },
                {
                    title: 'Tarea 3',
                    date: '2021-03-20',
                    tags: ['Backend'],
                    priority: 'medium',
                    state: 'in-progress'
                },
            ],
            columns: [
                {
                    title: 'Backlog',
                    id: 'backlog'
                },
                {
                    title: 'To Do',
                    id: 'to-do'
                },
                {
                    title: 'In Progress',
                    id: 'in-progress'
                },
                {
                    title: 'Blocked',
                    id: 'blocked'
                },
                {
                    title: 'Code Review',
                    id: 'code-review'
                },
                {
                    title: 'Test',
                    id: 'test'
                }
            ]
        }
    }
}

export default HomePage;
