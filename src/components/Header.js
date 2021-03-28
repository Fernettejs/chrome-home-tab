import brain_500 from "../images/brain_500.png";
import icon_sun from "../images/icon_sun.svg";
import Date from "./TodaysDate.js";

const header = () => {
  return (
    <div>
      <header
        class="header"
        style={{
          display: "flex",
          width: "62%",
          backgroundColor: "#102",
          padding: "5px",
          borderRadius: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            class="logo"
            style={{ height: "28px", margin: "5px" }}
            src={brain_500}
            alt="brain logo"
          />
          <h1 class="title" style={{ color: "#fff", padding: "5px" }}>
            Brain Tab
          </h1>
        </div>
        <button style={{ borderRadius: "100%", padding: "5px"}}>
          <img
            style={{ width: "40px", color: "#000", padding: "5px" }}
            src={icon_sun}
            alt=""
          />
        </button>
        <Date />
      </header>
    </div>
  );
};

export default header;
