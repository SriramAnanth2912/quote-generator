const Header = () => {
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
    </div>
  );
};
export default Header;
