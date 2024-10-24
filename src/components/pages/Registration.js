const Registration = () => {
  return (
    <div>
      <section classNmae="breadcrumb">
        <div class="container">
          <div class="breadcrumb-items">
            <div class="breadcrumb-item">
              <h2 class="breadcrumb-item-title">REGISTRATION</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="registration">
        <div class="container">
          <div class="registration-items">
            <div class="registration-left">
              <form class="registration-form" action="#">
                <p class="registration-form-title">Your Name</p>
                <input
                  class="registration-input"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  class="registration-input"
                  type="text"
                  placeholder="Last Name"
                />
                <div class="registration-select-gender">
                  <label class="registration-check" for="radio">
                    <input type="radio" />
                    Male
                  </label>
                  <label class="registration-check" for="radio">
                    <input type="radio" />
                    Female
                  </label>
                </div>
                <p class="registration-form-title">Login details</p>
                <input
                  class="registration-input"
                  type="text"
                  placeholder="Email"
                />
                <input
                  class="registration-input"
                  type="text"
                  placeholder="Password"
                />
                <p class="registration-form-text">
                  Please use 8 or more characters, with at least 1 number and a
                  mixture of uppercase and lowercase letters
                </p>
                <button
                  class="button button_reg button_paddings_reg button_text-white button_text-size-2 button_color-pink button_border-none button_cart-hover"
                  type="submit"
                >
                  JOIN NOW
                  <i class="registration-arrow fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
            <div class="registration-right">
              <h2 class="registration-text">LOYALTY HAS ITS PERKS</h2>
              <p class="registration-text">
                Get in on the loyalty program where you can earn points and
                unlock serious perks. Starting with these as soon as you join:
              </p>
              <ul class="registration-list">
                <li class="registration-li registration-text">
                  <i class="registration-lielem fa-solid fa-check fa-xl"></i>15%
                  off welcome offer
                </li>
                <li class="registration-li registration-text">
                  <i class="registration-lielem fa-solid fa-check fa-xl"></i>
                  Free shipping, returns and exchanges on all orders
                </li>
                <li class="registration-li registration-text">
                  <i class="registration-lielem fa-solid fa-check fa-xl"></i>$10
                  off a purchase on your birthday
                </li>
                <li class="registration-li registration-text">
                  <i class="registration-lielem fa-solid fa-check fa-xl"></i>
                  Early access to products
                </li>
                <li class="registration-li registration-text">
                  <i class="registration-lielem fa-solid fa-check fa-xl"></i>
                  Exclusive offers & rewards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Registration;
