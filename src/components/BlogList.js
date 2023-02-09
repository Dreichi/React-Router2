import React from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const blogs = [
    { id: 1, title: 'Blog 1', summary: 'Résumé du blog 1' },
    { id: 2, title: 'Blog 2', summary: 'Résumé du blog 2' },
    { id: 3, title: 'Blog 3', summary: 'Résumé du blog 3' }
  ];

  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          <p>{blog.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
