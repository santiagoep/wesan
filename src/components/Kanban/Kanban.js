import Grid from '../Grid/Grid';
import Task from '../Task/Task';
import Column from '../Column/Column';
import useKanban from '../../hooks/useKanban';

const Kanban = ({ tasks, columns }) => {
    const [{ tasksByState }]= useKanban({ tasks })

    const renderColumnTasks = (columnTasks = []) => columnTasks.map((task, index) => (
        <Task {...task} key={`task-${task.title}-${index}`} />
    ));

    const renderColumns = () => columns.map(({ title, id }) => (
        <Column title={title} key={id}>
            {renderColumnTasks(tasksByState[id])}
        </Column>
    ))

    return (
        <Grid>
            {renderColumns()}
        </Grid>
    )
}

Kanban.defaultProps = {
    tasks: [],
    columns: []
}

export default Kanban;