import Dropdown from "../Dropdown"
import "./styles.css";

const FilterPanel = ({ filters, onChange }) => {
  return (
    <div className="filter-panel">
      {filters.map((filter) => (
        <div className="filter-panel__item">
          <span className="filter-panel__title">{filter.title}</span>
          <Dropdown options={filter.options} onChange={(value) => onChange(filter.id, value)} />
        </div>
      ))}
    </div>
  );
}

export default FilterPanel;
