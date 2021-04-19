import {
    StyledTagsContainer,
  } from './Tags.styled';
import Tag from '../Tag/Tag';

const Tags = ({ tags }) => {
    const renderTags = () => tags.map((tag, index) => <Tag key={`tag-${tag}-${index}`}>{tag}</Tag>);
    return <StyledTagsContainer>{renderTags()}</StyledTagsContainer>;
}

export default Tags;