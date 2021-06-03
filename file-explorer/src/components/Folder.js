import styled from "styled-components";
import { BsFolderFill } from "react-icons/bs";

import { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SvgIcon from "@material-ui/core/SvgIcon";

import classes from "./Folder.module.css";

const StyledFolder = styled.div`
  padding-left: 24px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
    width: 100%;
    cursor: context-menu;
    &:hover {
      background-color: #3bb9ff;
    }
  }
`;
const ChildrenCollapse = styled.div`
  display: ${(p) => (p.isOpen ? "inherit" : "none")};
  transition: "display 2s ease";
`;

const Folder = ({ name, collapsed, children }) => {
  const [isOpen, setIsOpen] = useState(collapsed);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        {/* <PlayArrowIcon
          classes={isOpen ? classes.show : classes.hide}
          style={{ color: "#C0C0C0" }}
        /> */}
        <SvgIcon
          component={PlayArrowIcon}
          classes={
            isOpen
              ? {
                  root: classes.show,
                }
              : {
                  root: classes.hide,
                }
          }
          style={{ color: "#C0C0C0", transition: "0.3s" }}
        />
        <BsFolderFill style={{ color: "#82CAFF" }} />
        <span>{name}</span>
      </div>
      <ChildrenCollapse isOpen={isOpen}>{children}</ChildrenCollapse>
    </StyledFolder>
  );
};

export default Folder;
