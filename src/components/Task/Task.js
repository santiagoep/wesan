import Card from 'react-bootstrap/Card';

import { StyledDate } from './Task.styled'

const Task = ({title, date, tags, priority}) => {
    
    // const dateFormatter = (date) => `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
    const dateFormatter = (date) => `${dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`;
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return <Card>
        {title}
        {priority}
        <StyledDate>{dateFormatter(date)}</StyledDate>
        {state}
    </Card>
}

export default Task;