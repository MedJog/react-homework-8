const Breadcrumb = () => {
return (
<section className="breadcrumb">
    <div className="container">
      <div className="breadcrumb-items">
        <div className="breadcrumb-item">
          <h2 className="breadcrumb-item-title">NEW ARRIVALS</h2>
        </div>
        <div className="breadcrumb-item">
          <ul className="breadcrumb-item-list">
            <li className="breadcrumb-item-li"><a className="breadcrumb-item-link" href="#">HOME</a></li>
            <li className="breadcrumb-item-li"><a className="breadcrumb-item-link" href="#">MEN</a></li>
            <li className="breadcrumb-item-li"><a className="breadcrumb-item-link" href="#">NEW ARRIVALS</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
}
export default Breadcrumb;