import { useState } from "react";
// import AccordionListContext from "./AccordionListContext";
import AccordionListHeader from "./AccordionListHeader";
import AccordionListItem from "./AccordionListItem";
import Message from "../Message";

const AccordionListPanel = ({ item, itemIndex }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleIconClick = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={`accordion-list__panel ${isCollapsed ? 'collapse' : ''}`}>
      <AccordionListHeader
        index={itemIndex}
        item={item}
        onClick={handleIconClick}
        isCollapsed={isCollapsed}
      />
      <div className="accordion-list__content">
        {item.children.length > 0
          ? (item.children.map((child, childIndex) => (
            <AccordionListItem
              key={child.id}
              index={childIndex}
              item={child}
              parent={item}
            />
          )))
          : (
            <Message type="info">
              There are no items here.
            </Message>
          )}
      </div>
    </div>
  );
}

export default AccordionListPanel;
