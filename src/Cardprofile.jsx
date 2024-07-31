import { useParams, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cardprofile.css';

const markdownFiles = {
  post1: lazy(() => import('./Markdownjsx/Example.jsx')),
  post2: lazy(() => import('./Markdownjsx/About.jsx')),
  post3: lazy(() => import('./Markdownjsx/DockerT.jsx')),
  post4: lazy(() => import('./Markdownjsx/Astrophotography.jsx')),
  post5: lazy(() => import('./Markdownjsx/LearnVim.jsx')),
};

const blogPosts = [
  { date: "July 31, 2024", title: "About", description: "💙..About..em..what?", link: "post2", year: 2024 },
  { date: "February 22, 2024", title: "Docker Essentials: Navigating the Container Seas", description: "Docker and its Best Practices 🐳", link: "post3", year: 2024 },
  { date: "December 31, 2023", title: "Astrophotography", description: "Various photos taken through my camera this year", link: "post4", year: 2023 },
  { date: "December 24, 2023", title: "Learning Vim...?", description: "Beginner guide to get started with vim", link: "post5", year: 2023 }
];

const Cardprofile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ReactComponent = markdownFiles[id];

  if (!ReactComponent) {
    return <div>Post not found</div>;
  }

  const currentIndex = blogPosts.findIndex(post => post.link === id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 custom-div">
          <Suspense fallback={<div>Loading...</div>}>
            <ReactComponent />
          </Suspense>
          <hr className="separator-line" />
          <div className="navigation">
            {previousPost && (
              <div className="previous-post" onClick={() => navigate(`/post/${previousPost.link}`)}>
                <span>&lt; {previousPost.title}</span>
              </div>
            )}
            {nextPost && (
              <div className="next-post" onClick={() => navigate(`/post/${nextPost.link}`)}>
                <span>{nextPost.title} &gt;</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardprofile;
