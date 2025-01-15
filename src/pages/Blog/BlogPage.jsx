// to do
// add a link method or whatever it is called to each blog(in the loop)
// add a prop for the blog image
import Navbar from "../../components/Navbar/Navbar.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import PopularBlog from "../../components/PopularBlog/PopularBlog.jsx";
import { useState } from "react";

// importing movie data json file
import blogData from '../BlogData/BlogData.json';

import './BlogPage.css';

function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="blogPage-Main">
      
      <div className="blogFullPage">
        <Navbar />

      <div className="blogSection-container">

          <div className="NormalblogSection-container">
           {blogData.slice(0, visibleCount).map((blog, index) => (
             <Blog
               key={index}
               authorName={blog.authorName}
               blogTitle={blog.blogTitle}
               blogDescription={blog.blogDescription}
               pubDate={blog.pubDate}
               blogImage={blog.blogImage}
             />
           ))}

           {visibleCount < blogData.length && (
             <div className="button-container">
              <button className="show-more-btn" onClick={handleClick}>
                 Show More
               </button>
             </div>
           )}
         </div>
          <div className="populerSection-container">
           {/* only show the component if ifPopular is true */}
           {blogData.slice(0, visibleCount).map((blog, index) =>
             blog.isPopular && (
               <PopularBlog
                 key={index}
                 blogTitle={blog.blogTitle}
                 blogImage={blog.blogImage}
                 authorName={blog.authorName}
               />
             )
           )}
         </div>
         </div>
       </div>
     </div>
 );
}

export default BlogPage;

