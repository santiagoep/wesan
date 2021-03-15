import Modal from 'react-bootstrap/Modal'

import {
  StyledDate,
  StyledTags,
  StyledPriority,
  StyledDescription,
} from './TaskDetail.styled';
import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';

const TaskDetail = ({
  title,
  date,
  tags,
  priority,
  description,
  show,
  onClose
}) => {

  const dateFormatter = (date) => `${dateFormat(date, "YYYY-MM-DD")}`;
  const renderTags = () => tags.map((tag) => <StyledTags>{tag}</StyledTags>);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledPriority priority={priority}>{es[priority]}</StyledPriority>
        <StyledDate>Fecha de vencimiento: {dateFormatter(date)}</StyledDate>
        <StyledDescription>{description}</StyledDescription>
        {renderTags()}
      </Modal.Body>
    </Modal>
  )
}

TaskDetail.defaultProps = {
  tags: [],
  onClose: () => { }
};

export default TaskDetail;