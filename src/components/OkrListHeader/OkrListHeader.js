import { FaUserCircle } from 'react-icons/fa';
import './styles.css';

const OkrListHeader = ({ item, index, onItemClick }) => (
  <div className="okr-list__header">
    <FaUserCircle className="okr-list__icon" />
    <h2 className="okr-list__title" onClick={() => onItemClick(item)}>
      <span class="okr-list__num">{index + 1}.</span>
      {item.title}
    </h2>
  </div>
);

export default OkrListHeader;
