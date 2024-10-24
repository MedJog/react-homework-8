const Categories = () => {
  return (
    <section className="categories">
    <div className="container">
      <div className="categories-items">
        <div className="categories-items-top">
          <div className="categories-item">
            <img className="categories-item-image" src="/images/for_women.png" alt="for women" />
            <div className="categories-item-title">
              <h2 className="item-title-white">30% OFF</h2>
              <h2 className="item-title-pink color-pink">FOR WOMEN</h2>
            </div>
          </div>
          <div className="categories-item">
            <img className="categories-item-image" src="/images/for_man.png" alt="for women" />
            <div className="categories-item-title">
              <h2 className="item-title-white">HOT DEAL</h2>
              <h2 className="item-title-pink color-pink">FOR MEN</h2>
            </div>
          </div>
          <div className="categories-item">
            <img className="categories-item-image" src="/images/for_kids.png" alt="for women" />
            <div className="categories-item-title">
              <h2 className="item-title-white">NEW ARRIVALS</h2>
              <h2 className="item-title-pink color-pink">FOR KIDS</h2>
            </div>
          </div>
        </div>
        <div className="categories-item categories-item-big">
          <img className="categories-item-image" src="/images/accesories.png" alt="for women" />
          <div className="categories-item-title">
            <h2 className="item-title-white">LUXIROUS & TRENDY</h2>
            <h2 className="item-title-pink color-pink">ACCESORIES</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Categories;