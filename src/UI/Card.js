const Card = ({item}) => {
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' })

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
        <span>Active <strong>{formatDate(item.createdOn)}</strong></span>
        <h2>
          <a href={item.title}>{item.title}</a>
        </h2>

        <p>
          {item.description}...
        </p>

        <span>Last Updated <strong>{formatDate(item.updatedOn)}</strong> by <strong>{item.updatedBy}</strong></span>
      </div>

    </div>
  );
}

export default Card