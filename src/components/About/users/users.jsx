//img
import Time from "../../Main/Users/img/time.svg";

export default function Users() {
  return (
    <>
      <h2 style={{ fontWeight: "500", marginBottom: "15px" }}>
        More like this
      </h2>
      <ul>
        <li className="user__item">
          <div className="user__wrapper">
            <span className="user__date">September 24.2020</span>
            <span className="user__items">Design theory</span>
          </div>
          <h2 className="user__about-title">
            How to choose the right colors when creating a website?
          </h2>
          <div className="user__date-wrapper">
            <img
              className="user__time-img"
              src={Time}
              alt="time-img"
              width="17px"
              height="17px"
            />
            <span className="user__time-text">3 minutes read</span>
          </div>
        </li>
        <li className="user__item">
          <div className="user__wrapper">
            <span className="user__date">September 24.2020</span>
            <span className="user__items">Design theory</span>
          </div>
          <h2 className="user__about-title">
            How to choose the right colors when creating a website?
          </h2>
          <div className="user__date-wrapper">
            <img
              className="user__time-img"
              src={Time}
              alt="time-img"
              width="17px"
              height="17px"
            />
            <span className="user__time-text">3 minutes read</span>
          </div>
        </li>
        <li className="user__item">
          <div className="user__wrapper">
            <span className="user__date">September 24.2020</span>
            <span className="user__items">Design theory</span>
          </div>
          <h2 className="user__about-title">
            How to choose the right colors when creating a website?
          </h2>
          <div className="user__date-wrapper">
            <img
              className="user__time-img"
              src={Time}
              alt="time-img"
              width="17px"
              height="17px"
            />
            <span className="user__time-text">3 minutes read</span>
          </div>
        </li>
      </ul>
    </>
  );
}
