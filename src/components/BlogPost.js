import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  const getBlogDetails = blogId => {
    const blogs = [
      { id: 1, title: 'Blog 1', summary: 'Résumé du blog 1' },
      { id: 2, title: 'Blog 2', summary: 'Résumé du blog 2' },
      { id: 3, title: 'Blog 3', summary: 'Résumé du blog 3' }
    ];
    return blogs.find(blog => blog.id === parseInt(blogId));
  };

  const blog = getBlogDetails(id);
  return (
    <div>
      <h1>Article N° {blog.id}</h1>
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
    </div>
  );
}

export default BlogPost;
