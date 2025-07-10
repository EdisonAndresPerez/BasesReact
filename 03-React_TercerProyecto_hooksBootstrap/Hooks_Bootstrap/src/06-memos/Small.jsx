import { memo } from "react";



const Small = memo( ({counter}) => {
  return <small>{counter}</small>;
});

export default Small;
