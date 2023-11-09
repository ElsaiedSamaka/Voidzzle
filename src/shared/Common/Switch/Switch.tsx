const Switch = ({ testCase, children }) => {
  // filter out only children with a matching prop
  return (
    children.find((child) => {
      return child.props.id === testCase;
    }) || null
  ); // Return null if no matching child is found
};

export default Switch;
