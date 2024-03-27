export const Header = () => {
  const handleMenuClick = () => {
    alert('Menu button clicked!');
  };

  return (
    <header>
      <div className="logo">Logo</div>
      <h1 className="title">Title</h1>
      <button className="menu-button" onClick={handleMenuClick}>Menu</button>
    </header>
  );
}