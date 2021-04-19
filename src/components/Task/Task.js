import React, { useState } from 'react';

import {
  StyledCard,
  StyledDate,
  StyledPriority,
} from './Task.styled';
import Tags from '../Tags/Tags';
import es from '../../config/languages/es';
import { dateFormat } from '../../utils/dates';
import TaskDetail from '../TaskDetail/TaskDetail';

const Task = ({ title, date, tags, priority, ...taskDetail }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dateFormatter = (date) => dateFormat(date, "DD/MM/YYYY").toString();

  return (
    <>
      <StyledCard onClick={handleShow}>
      <Tags tags={tags} />
        {title}
        <StyledPriority
          priority={priority}
        >
          {es[priority]}
        </StyledPriority>
        <StyledDate>
          {dateFormatter(date)}
        </StyledDate>
      </StyledCard>
      <TaskDetail
        show={show}
        title={title}
        priority={priority}
        onClose={handleClose}
        tags={tags}
        {...taskDetail}
      />
    </>
  );
}

Task.defaultProps = {
  tags: []
};

export default Task;