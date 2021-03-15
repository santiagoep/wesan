import Card from 'react-bootstrap/Card';

import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';
import { StyledDate } from '../TaskDetail/TaskDetail.styled';
import {StyledPriority, StyledTags} from './Task.styled';

const Task = ({title, date, tags, priority}) => {
    const dateFormatter = (date) => `${dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`;
    return (
    <Card>
        {title}
        <StyledPriority  priority={priority}>{es[priority]}</StyledPriority>
        <StyledDate>{dateFormatter(date)}</StyledDate>
        <StyledTags>{tags}</StyledTags>
    </Card>
    );
}

export default Task;