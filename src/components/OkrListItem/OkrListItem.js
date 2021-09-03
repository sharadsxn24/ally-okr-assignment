import { numToAlpha } from "../../utils/helpers";
import { FaRegCheckCircle } from 'react-icons/fa';
import './styles.css';

const OkrListItem = ({ item, parent, index, onItemClick }) => (
  <div className="okr-list__item">
    <FaRegCheckCircle className="okr-list__icon" />
    <h3 className="okr-list__title" onClick={() => onItemClick(item, parent)}>
      <span className="okr-list__num">{numToAlpha(index + 1).toLowerCase()}.</span>
      {item.title}
    </h3>
  </div>
);

export default OkrListItem;