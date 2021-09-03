import "./styles.css";

const Dropdown = ({ options, onChange }) => {
  return (
    <div className="dropdown">
      <select onChange={(event) => onChange(event.target.value)}>
        {options.map((item) => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
