import Helper from "../Bloc/Helper";
import { FaCalendarAlt } from 'react-icons/fa';
import BorderCard from "./BorderCard";

const Card = ({item, selected, onChange}) => {
  return (
    <BorderCard className="card" onClick={onChange} selected={selected}>

      {item.thumbnail &&
        <img
          alt={item.title}
          src={item.thumbnail}
          className="responsive"
        />
      }

      <div className="card-text">
        <span><FaCalendarAlt /> <label>Active <strong>{Helper.formatDate(item.createdOn)}</strong></label></span>
        <h2>
          {item.title}
        </h2>

        <p>
          {item.description}...
        </p>

        <span><FaCalendarAlt /> <label>Last Updated <strong>{Helper.formatDate(item.updatedOn, 'medium')}</strong> by <strong>{item.updatedBy}</strong></label></span>
      </div>

    </BorderCard>
  );
}

export default Card