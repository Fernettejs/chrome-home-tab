import Window from "./Window.js";

const Windows = () => {
  return (
    <div style={{ marginTop: "10px", padding: "16px", backgroundColor: "#102", width: "180px", borderRadius:"10px"}}>
      {<Window text={"Search"}/* ADD FUNCTION TO SHOW WHICH IS SELECTED --> color={showActive ? 'red' : 'green'} */ />}
      <Window text={"Tasks"}/>
      <Window text={"Notes"}/>
      <Window text={"Code Ideas"}/>
    </div>
  );
};

export default Windows;
