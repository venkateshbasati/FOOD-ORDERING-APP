const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(8)
        .fill("")
        .map((e, index) => (
          <div key={index} className="Shimmer-card"></div>
        ))}
      ;
    </div>
  );

 
};

export default Shimmer;
