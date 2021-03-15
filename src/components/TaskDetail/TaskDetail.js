import Modal from 'react-bootstrap/Modal'

import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';
import {StyledPriority, StyledDescription, StyledTags, StyledDate} from './TaskDetail.styled';

const TaskDetail = ({title, date, tags, priority, description, show, onClose}) => {

    const dateFormatter = (date) => `${dateFormat(date, "yyyy-mm-dd")}`;
    const renderTags = () => tags.map((tag) => <StyledTags>{tag}</StyledTags>);

    return  (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <StyledPriority priority={priority}>{es[priority]}</StyledPriority>
            <StyledDate>{dateFormatter(date)}</StyledDate>
            <StyledDescription>{description}</StyledDescription>
            {renderTags()}
        </Modal.Body>
    </Modal>)
}

TaskDetail.defaultProps = {
    tags: [],
    onClose:  () => {}
};

export default TaskDetail;