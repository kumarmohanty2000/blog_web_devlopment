import Header from "./header/header.jsx";
import Home from "./home/home.jsx";
import BlogPost from "./blogpost/blogpost.jsx";
import data from "../public/data/data.js";
import About from "./about/about.jsx";
import Footer from "./footer/footer.jsx";
import Contact from "./contact/contact.jsx";

import "./App.css";
// import Pagination from "./componants/pagination.jsx";

const App = () => {
  return (
    <div className="App">
      <Header title="Modern Blog" section1="Home" section2="About" section3="contact" />
      <main>
        <section id="Home">
          <Home />
        </section>
        <div className="after-home">
          <div className="left-side">

            {/* For pagination */}
            
            {/* {data.map((posts)=>(<BlogPost  {...posts}/>))} */}

            <BlogPost {...data[0]}/>
            <BlogPost {...data[1]}/>
            <BlogPost {...data[2]}/>
          </div>
          <div className="right-side">
            <section id="About">
              <div className="about">
                <About />
              </div>
            </section>
            <section id="Contact">
              <div className="contact">
                <Contact />
              </div>
            </section>
          </div>
        </div>
        <Footer text="© 2024 Modern Blog. All rights reserved." />
      </main>
    </div>
  );
};

export default App;
