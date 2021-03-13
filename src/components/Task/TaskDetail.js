import Modal from 'react-bootstrap/Modal'

import { StyledDate } from './Task.styled'

const TaskDetail = ({title, date, tags, priority, description}) => {
    
    // const dateFormatter = (date) => `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
    const dateFormatter = (date) => `${dateFormat(date, "yyyy-mm-dd")}`;
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return  <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <StyledPriority>{priority}</StyledPriority>
            <StyledTags>{tags}</StyledTags>
            <StyledDate>{dateFormatter(date)}</StyledDate>
            <StyledDescription>{description}</StyledDescription>
        </Modal.Body>
    </Modal.Dialog>
}

export default Task;