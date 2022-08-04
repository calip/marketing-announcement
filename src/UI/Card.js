import Helper from "../Bloc/Helper";
import { FaCalendarAlt } from 'react-icons/fa';

const Card = ({item}) => {
  return (
    <div className="card">

      {item.thumbnail &&
          <img
            alt=""
            src={item.thumbnail}
            className="responsive"
          />
      }

      <div className="card-text">
        <span><FaCalendarAlt /> <label>Active <strong>{Helper.formatDate(item.createdOn)}</strong></label></span>
        <h2>
          <a href={item.title}>{item.title}</a>
        </h2>

        <p>
          {item.description}...
        </p>

        <span><FaCalendarAlt /> <label>Last Updated <strong>{Helper.formatDate(item.updatedOn, 'medium')}</strong> by <strong>{item.updatedBy}</strong></label></span>
      </div>

    </div>
  );
}

export default Card