const Item = ({item}) => {
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  return (
    <div className="item">

      {item.thumbnail &&
          <img
            alt=""
            src={item.thumbnail}
            className="responsive"
          />
      }

      <div className="right">
        <h2 className="title">
          <a href={item.title}>{item.title}</a>
        </h2>

        <p className="description">
          {item.description}
        </p>

        <div className="meta">
          <span>{formatDate(item.updatedOn)}</span>

          <span className="provider">
            {item.updatedBy}
          </span>
        </div>
      </div>

    </div>
  );
}

export default Item