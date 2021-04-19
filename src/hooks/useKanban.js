import { useState, useEffect } from 'react';

import { keyTasksByState } from '../utils/tasks';

const useKanban = ({ tasks }) => {
    const [tasksByState, setTasksByState] = useState(keyTasksByState(tasks));

    useEffect(() => {
        const keyedTasksByState = keyTasksByState(tasks);
        setTasksByState(keyedTasksByState);
    }, [tasks]);

    return [{ tasksByState }]
}

export default useKanban;