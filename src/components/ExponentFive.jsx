const ExponentFive = ({ count }) => {
  const exponent = count * count * count * count * count


  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{exponent}</span></p>
    </div>
  )
};

export default ExponentFive;