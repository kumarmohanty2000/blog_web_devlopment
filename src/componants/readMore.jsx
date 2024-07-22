import { useState } from "react";

const Readmore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, 100)}...`}
        <span
          onClick={toggleReadMore}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
        
      </p>
      
    </div>
  );
};
export default Readmore;
