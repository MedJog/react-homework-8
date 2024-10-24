const Subscribe = () => {
  return (
<section className="subscribe">
    <div className="container">
      <div className="subscribe-items">
        <div className="subscribe-item">
          <img className="subscribe-image" src="/images/face.png" alt="face" />
          <p className="subscribe-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,<span className="italic"> a pulvinar purus condimentum“</span></p>
        </div>
        <div className="subscribe-item">
          <h2 className="subscribe-title">SUBSCRIBE</h2>
          <p className="subscribe-info"> FOR OUR NEWLETTER AND PROMOTION</p>
          <form className="subscribe-form" action="">
            <input className="subscribe-input-field" type="text" placeholder="Enter Your Email" />
            <button className="button button_oval button_border-none button_color-pink button_text-white button_text-size-2" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Subscribe;