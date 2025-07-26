const MenuItem = ({ item }) => {
  return (
    <li>
      <div className="me-28">
        <h3>{item?.name}</h3>
        <p>
          {item?.country} | {item?.detail}
        </p>
      </div>
      <span>- {item?.price}</span>
    </li>
  );
};

export default MenuItem;
