import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building End-to-End ML Pipelines',
      excerpt: 'A comprehensive guide to creating production-ready machine learning pipelines with Python, TensorFlow, and cloud deployment.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: '/blog1.jpg'
    },
    {
      title: 'Data Science Automation with Python',
      excerpt: 'Learn how to automate repetitive data tasks and build efficient ETL pipelines for business intelligence.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: '/blog2.jpg'
    },
    {
      title: 'Full-Stack Development with Django & React',
      excerpt: 'Best practices for building scalable web applications using Django backend and React frontend with modern deployment strategies.',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: '/blog3.jpg'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title" data-bg="Blog">My Blog</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
