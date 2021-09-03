import { useContext } from "react";
import AccordionListContext from "./AccordionListContext";
import { FaAngleDoubleDown } from "react-icons/fa";

const AccordionListHeader = ({ onClick, isCollapsed, ...props }) => {
  const { renderHeader: Component, onItemClick } = useContext(AccordionListContext);
  return (
    <div className="accordion-list__header">
      <FaAngleDoubleDown onClick={onClick} className="accordion-list__header__icon" />
      <Component {...props} onItemClick={onItemClick} />
    </div>
  );
}

export default AccordionListHeader;
