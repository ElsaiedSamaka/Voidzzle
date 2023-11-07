const Switch = ({ test, children }) => {
  // filter out only children with a matching prop
  return children.find((child) => {
    return child.props.key === test;
  });
};

export default Switch;
