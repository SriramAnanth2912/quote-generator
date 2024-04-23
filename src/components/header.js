const Header = () => {
  const now = new Date();
  const hours = now.getHours();
  const salutation =
    hours < 5
      ? "Good Night"
      : hours < 11
      ? "Good Morning"
      : hours < 15
      ? "Good Afternoon"
      : hours < 18
      ? "Good Evening"
      : "Good Night";
  const reloadPage = () => {
    if (window && window.location) {
      window.location.reload();
    } else {
      console.error("Unable to reload the page: Window or Location object not available");
    }
  };
  return (
    <div className="header">
      <div className="header-title" onClick={reloadPage}>
        Quote Generator
      </div>
      <div className="salutation">
        {salutation}
        <span style={{ fontStyle: "normal" }}> {"😊"}</span>
      </div>
    </div>
  );
};
export default Header;
