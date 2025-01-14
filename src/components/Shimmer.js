const Shimmer = () => {
  const numberOfShimmerCards = 12;

  const shimmerCards = Array.from(
    { length: numberOfShimmerCards },
    (_, index) => <div key={index} className="shimmer-card"></div>
  );

  return <div className="res-container">{shimmerCards}</div>;
};

export default Shimmer;
