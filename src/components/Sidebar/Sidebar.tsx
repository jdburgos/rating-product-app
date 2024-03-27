import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/liked">Liked</Link>
      </nav>
    </aside>
  );
}
