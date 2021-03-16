export const isAPriority = (priority = '') =>
    priority === 'low' ||
    priority === 'medium' ||
    priority === 'hight';

export const keyTasksByState = (tasks) => tasks.reduce((acc, curr) => {
    if (!acc[curr.state]) {
        acc[curr.state] = []
    };

    acc[curr.state].push(curr);

    return acc;
}, {});