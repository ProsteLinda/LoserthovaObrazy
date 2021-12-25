import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box, Title, Text } from "../Core";
import GlobalContext from "../../context/GlobalContext";


const WorkBox = styled(Box)``;
const TextBox = styled(Box)`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
  }
  ${WorkBox}:hover & {
    bottom: 20px;
    opacity: 1;
  }
`;




const WorkCard = ({ workItem, link, ...rest }) => {
  const gContext = useContext(GlobalContext);

  const onImageClick = () => {
    gContext.setActualImage(workItem.thumbnail);
    gContext.toggleImage();
    console.log("clicked div")
  };

  return (
    <WorkBox className="position-relative" {...rest}>
      <div onClick={onImageClick}>
        <img src={workItem.thumbnail} alt="" className="w-100" />
      </div>

      <TextBox>
        <Text variant="tag" mb={2}>
          {workItem.slug}
        </Text>
        <Title variant="card">
          <Link to={link}>{workItem.brand} </Link>
        </Title>
      </TextBox>
    </WorkBox>
  )
};
export default WorkCard;
