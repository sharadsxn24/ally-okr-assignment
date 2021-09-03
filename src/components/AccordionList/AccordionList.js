import AccordionListPanel from "./AccordionListPanel";
import AccordionListContext from "./AccordionListContext";
import './styles.css';

const { Provider } = AccordionListContext;

const AccordionList = ({ items, renderHeader, renderItem, onItemClick }) => {
  const value = { renderHeader, renderItem, onItemClick };
  return (
    <Provider value={value}>
      <div className="accordion-list">
        {items.map((item, itemIndex) => (
          <AccordionListPanel
            key={item.id}
            item={item}
            itemIndex={itemIndex}
          />
        ))}
      </div>
    </Provider>
  );
}

export default AccordionList;
