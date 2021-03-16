import Modal from 'react-bootstrap/Modal'

import {
  StyledDate,
  StyledLabel,
  StyledBlock,
  StyledPriority,
  StyledDescription,
} from './TaskDetail.styled';
import Tags from '../Tags/Tags';
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
  const dateFormatter = (date) => dateFormat(date, "DD/MM/YYYY").toString();

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledBlock>
          <StyledLabel>Prioridad:</StyledLabel>
          <StyledPriority priority={priority}>{es[priority]}</StyledPriority>
        </StyledBlock>
        <StyledBlock>
          <StyledLabel>Fecha:</StyledLabel>
          <StyledDate>{dateFormatter(date)}</StyledDate>
        </StyledBlock>
        <StyledBlock>
          <StyledLabel>Descripción:</StyledLabel>
        <StyledDescription>{description}</StyledDescription>
      </StyledBlock>
        <StyledBlock>
          <StyledLabel>Etiquetas:</StyledLabel>
          <Tags tags={tags} />
        </StyledBlock>
      </Modal.Body>
    </Modal>
  )
}

TaskDetail.defaultProps = {
  tags: [],
  onClose: () => { }
};

export default TaskDetail;