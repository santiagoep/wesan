import Card from 'react-bootstrap/Card';

import { StyledDate } from './Task.styled'

const Task = ({title, date}) => {
    const dateFormatter = (date) => `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;

    return <Card>
        {title}
        <StyledDate>{dateFormatter(date)}</StyledDate>
    </Card>
}

export default Task;