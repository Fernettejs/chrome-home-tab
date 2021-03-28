import Window from "./Window.js";

const Windows = () => {
  return (
    <div style={{ padding: "10px" }}>
      {<Window text={"Search"}/* ADD FUNCTION TO SHOW WHICH IS SELECTED --> color={showActive ? 'red' : 'green'} */ />}
      <Window text={"Tasks"}/>
      <Window text={"Notes"}/>
      <Window text={"Code Ideas"}/>
    </div>
  );
};

export default Windows;
