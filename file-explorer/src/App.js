import Tree from "./components/Tree";

const treeData = [
  {
    key: "0",
    name: "browser",
    type: "folder",
    collapsed: false,
    childrens: [
      {
        key: "0-0",
        name: "browser0",
        type: "file",
      },
      {
        key: "0-1",
        name: "browser1",
        type: "file",
      },
    ],
  },
  {
    key: "1",
    name: "core",
    type: "folder",
    collapsed: false,
    childrens: [
      {
        key: "1-0",
        name: "core0",
        type: "file",
      },
      {
        key: "1-1",
        name: "core1",
        type: "file",
      },
    ],
  },
  {
    key: "2",
    name: "hub",
    type: "folder",
    collapsed: false,
    childrens: [
      {
        key: "2-0",
        name: "hub0",
        type: "file",
      },
      {
        key: "2-1",
        name: "hub1",
        type: "file",
      },
    ],
  },
  {
    key: "3",
    name: "minimal",
    type: "folder",
    collapsed: false,
    childrens: [
      {
        key: "3-0",
        name: "minimal0",
        type: "file",
      },
      {
        key: "3-1",
        name: "minimal1",
        type: "file",
      },
    ],
  },
  {
    key: "4",
    name: "types",
    type: "folder",
    collapsed: true,
    childrens: [
      {
        key: "4-0",
        name: "dist",
        type: "folder",
        collapsed: false,
        childrens: [
          {
            key: "4-0-0",
            name: "dist0",
            type: "file",
          },
          {
            key: "4-0-1",
            name: "dist1",
            type: "file",
          },
        ],
      },
      {
        key: "4-1",
        name: "esm",
        type: "folder",
        collapsed: false,
        childrens: [
          {
            key: "4-1-0",
            name: "esm0",
            type: "file",
          },
          {
            key: "4-1-1",
            name: "esm1",
            type: "file",
          },
        ],
      },
      {
        key: "4-2",
        name: "LICENSE",
        type: "file",
      },
      {
        key: "4-3",
        name: "package.json",
        type: "file",
      },
      {
        key: "4-4",
        name: "README.md",
        type: "file",
      },
    ],
  },
  {
    key: "5",
    name: "utils",
    type: "folder",
    collapsed: true,
    childrens: [
      {
        key: "5-0",
        name: "dist",
        type: "folder",
        collapsed: false,
        childrens: [
          {
            key: "5-0-0",
            name: "dist0",
            type: "file",
          },
          {
            key: "5-0-1",
            name: "dist1",
            type: "file",
          },
        ],
      },
      {
        key: "5-1",
        name: "esm",
        type: "folder",
        collapsed: false,
        childrens: [
          {
            key: "5-1-0",
            name: "esm0",
            type: "file",
          },
          {
            key: "5-1-1",
            name: "esm1",
            type: "file",
          },
        ],
      },
      {
        key: "5-2",
        name: "LICENSE",
        type: "file",
      },
      {
        key: "5-3",
        name: "package.json",
        type: "file",
      },
      {
        key: "5-4",
        name: "README.md",
        type: "file",
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <div className="line" />
      <Tree data={treeData} />
    </div>
  );
};

export default App;
