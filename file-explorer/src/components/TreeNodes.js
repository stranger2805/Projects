import File from "./File";
import Folder from "./Folder";

const TreeNodes = ({ data }) => {
  return data.map((item) => {
    if (item.type === "file") {
      return <File name={item.name} />;
    }
    if (item.type === "folder") {
      return (
        <Folder name={item.name} collapsed={item.collapsed}>
          <TreeNodes data={item.childrens} />
        </Folder>
      );
    }
  });
};

export default TreeNodes;
