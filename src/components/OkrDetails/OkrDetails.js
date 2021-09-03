import "./styles.css";

const okrDetails = [
  { id: "title", title: 'Title' },
  { id: "id", title: 'ID' },
  { id: "category", title: 'Category' },
  { id: "metric_name", title: 'Metric Name' },
  { id: "metric_start", title: 'Metric Start' },
  { id: "metric_target", title: 'Metric Target' },
  { id: "archived", title: 'Archieved' }
];
const parentDetails = [
  { id: "title", title: 'Parent' },
];

const OkrDetails = ({ item, parent }) => {
  return (
    <div className="okr-details">
      {parent && parentDetails.map((detail) => (
        <div key={detail.id} className="okr-details__row">
          <div className="okr-details__title">{detail.title}</div>
          <div className="okr-details__value">{parent[detail.id]}</div>
        </div>
      ))}
      {okrDetails.map((detail) => (
        <div key={detail.id} className="okr-details__row">
          <div className="okr-details__title">{detail.title}</div>
          <div className="okr-details__value">{item[detail.id] || '--'}</div>
        </div>
      ))}
    </div>
  )
};

export default OkrDetails;
