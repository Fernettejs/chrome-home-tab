const TodaysDate = () => {
  const dateBuilder = () => {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  };

  return (
    <h4
      class="date"
      style={{
        color: "#fff",
        display: "inline",
        textAlign: "right",
        justifyContent: "space-between",
      }}
    >
      {dateBuilder()}
    </h4>
  );
};

export default TodaysDate;
