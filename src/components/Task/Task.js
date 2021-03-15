import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';
import TaskDetail from '../TaskDetail/TaskDetail';
import { StyledDate } from '../TaskDetail/TaskDetail.styled';
import { StyledPriority, StyledTags, StyledTagsContainer } from './Task.styled';

const Task = ({ title, date, tags, priority }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dateFormatter = (date) => `${dateFormat(date, "yyyy-mm-dd")}`;

  const renderTags = () => tags.map((tag) => <StyledTags>{tag}</StyledTags>);

  return (
    <>
      <Card onClick={handleShow}>
        {title}
        <StyledPriority priority={priority}>{es[priority]}</StyledPriority>
        <StyledDate>Fecha de vencimiento: {dateFormatter(date)}</StyledDate>
        <StyledTagsContainer>{renderTags()}</StyledTagsContainer>
      </Card>
      <TaskDetail
        show={show}
        onHide={!show}
        title={title}
        priority={priority}
        onClose={handleClose}
        tags={tags}
      />
    </>
  );
}

Task.defaultProps = {
  tags: []
};

export default Task;