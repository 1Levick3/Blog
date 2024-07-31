import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mid.css';
import aboutme from "/src/Markdownjsx/aboutme.jpg";
import meme from "/src/Markdownjsx/image-2.png";
import moon from "/src/Markdownjsx/full-moon.jpg";
import vimb from "/src/Markdownjsx/vimB.png";

const blogPosts = [
  { date: "July 31, 2024", title: "About", description: "💙..About..em..what?", link: "post2", year: 2024, bgImage: aboutme },
  { date: "February 22, 2024", title: "Docker Essentials: Navigating the Container Seas", description: "Docker and its Best Practices 🐳", link: "post3", year: 2024, bgImage: meme },
  { date: "December 31, 2023", title: "Astrophotography", description: "Various photos taken through my camera this year", link: "post4", year: 2023, bgImage: moon },
  { date: "December 24, 2023", title: "Learning Vim...?", description: "Beginner guide to get started with vim", link: "post5", year: 2023, bgImage: vimb }
];

const Mid = () => {
  const navigate = useNavigate();
  let lastYear = null;

  return (
    <div className="mid-container">
      <div className="year-separator">
        <span className="year-label">Posts</span>
      </div>
      {blogPosts.map((post, index) => {
        const showSeparator = lastYear && lastYear !== post.year;
        const separatorYear = post.year;
        lastYear = post.year;

        return (
          <React.Fragment key={index}>
            {showSeparator && (
              <div className="year-separator">
                <span className="year-label">{separatorYear}</span>
              </div>
            )}
            <div 
              className="blog-post" 
              onClick={() => navigate(`/post/${post.link}`)} 
              style={{ backgroundImage: `url(${post.bgImage})` }}
            >
              <div className="post-date">{post.date}</div>
              <div className="post-title">{post.title}</div>
              <div className="post-description">{post.description}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mid;
