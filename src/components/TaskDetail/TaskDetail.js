import Modal from 'react-bootstrap/Modal'

import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';
import {StyledPriority, StyledDescription, StyledTags, StyledDate} from './TaskDetail.styled';

const TaskDetail = ({title, date, tags, priority, description}) => {
    const dateFormatter = (date) => `${dateFormat(date, "yyyy-mm-dd")}`;
    return  (
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <StyledPriority priority={priority}>{es[priority]}</StyledPriority>
            <StyledTags>{tags}</StyledTags>
            <StyledDate>{dateFormatter(date)}</StyledDate>
            <StyledDescription>{description}</StyledDescription>
        </Modal.Body>
    </Modal.Dialog>)
}

export default TaskDetail;