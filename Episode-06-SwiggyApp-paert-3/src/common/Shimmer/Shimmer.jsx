// width should be in %

const ShimmerComponent = ({ className, height, width, radius, mb, style }) => {
  const css = {
    height: height,
    width: `${width}%`,
    borderRadius: `${radius}px`,
    marginBottom: `${mb}px`,
    ...style,
  };
  return (
    <div className={`shimmer ${!!className && className}`} style={css}></div>
  );
};

export default ShimmerComponent;
