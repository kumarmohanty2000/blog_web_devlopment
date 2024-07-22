import "./about.css"


function About () {

    return(

        <div className="about">
            <div className="about-the-blogger">
                <h1 className="about-the-blogger-title">About the Blogger</h1>
                <p className="about-the-blogger-text">A blogger is someone who regularly writes and publishes content on a blog, which is a personal or professional website. Bloggers share their thoughts, opinions, expertise, experiences, or observations on various topics or niches. Here are some key aspects of what a blogger does:

Content Creation: Bloggersng updating content regularly, maintaining the blog’s design and layout, managing comments, and ensuring the website functions smoothly.
                </p>
            </div>
            <div className="welcome-to-mordern-blog">
                <h1 className="welcome-to-mordern-blog-title">Welcome to Modern Blog</h1>
                <p className="welcome-to-mordern-blog-text">Hello and welcome! I'm thrilled to have you here. This blog is a space where I share my thoughts, experiences, and insights on various topics that I'm passionate about. Whether you're here to learn something new, get inspired, or just enjoy some good reads, I hope you find something that resonates with you.
                </p>
            </div>
            <div className="tags">
                <h1 className="tags-title">Popular Tags</h1>
                <div className="tags-list">
                    <ul>
                        <li className="tags-list-item">photoshot</li>
                        <li className="tags-list-item">earch Engine Optimization</li>
                        <li className="tags-list-item">
                       Building relationships with other bloggers </li>
                        <li className="tags-list-item">Writing Skills</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;