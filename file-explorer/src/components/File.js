import { AiOutlineFile, AiFillFile } from "react-icons/ai";
import styled from "styled-components";
import FILE_ICONS from "./FileIcons";

const StyledFile = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  cursor: context-menu;
  &:hover {
    background-color: #3bb9ff;
  }
`;

const File = ({ name }) => {
  console.log(name);

  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {FILE_ICONS[ext] || <AiFillFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

export default File;
