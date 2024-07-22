import './header.css';

const Header = ({title, section1,section2 ,section3,text }) => {
  return (

    <header className="header">
      
      <div className="title">{title}</div>
      <nav className="nav">
        <a href="#Home">{section1}</a>
        <a href="#About">{section2}</a>
        <a href="#Contact">{section3}</a>
      </nav>
    </header>
  );
};

export default Header;
