import { useContext } from "react";
import AccordionListContext from "./AccordionListContext";

const AccordionListItem = (props) => {
  const { renderItem: Component, onItemClick } = useContext(AccordionListContext);
  return (
    <div className={`accordion-list__item ${props.index % 2 ? '' : 'odd'}`}>
      <Component {...props} onItemClick={onItemClick} />
    </div>
  );
}

export default AccordionListItem;
