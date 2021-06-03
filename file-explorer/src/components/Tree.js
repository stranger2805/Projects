import styled from "styled-components";
import TreeNodes from "./TreeNodes";

const StyledTree = styled.div`
  line-height: 1.5;
  height: 100vh;
  overflow: auto;
`;

const Tree = ({ data, children }) => {
  const isImperative = data && !children;

  return (
    <StyledTree>
      {isImperative ? <TreeNodes data={data} /> : children}
    </StyledTree>
  );
};

export default Tree;
