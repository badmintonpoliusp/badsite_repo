import { blogData } from '../data/blogData';
import { Link } from 'react-router-dom';
import "./Post2Display.css";

function Post2Display() {
    const copyData = [...blogData].sort((a, b) => b.id - a.id); // Do mais recente para o mais antigo
    const postsToDisplay = copyData.length <= 3 ? copyData : copyData.slice(0, 3);

    const content = postsToDisplay.map(post => (
        <div key={post.id} className='post-demo'>
            <Link to={`/blog/${post.id}`} className="post-link">
                <h3>{post.title}</h3>
                <span>{post.date} - por {post.author}</span>
            </Link>
        </div>
    ));

    return (
        <div className='P2D-container'>
            <h2>Últimas Publicações</h2>
            {content}
            <Link to="/blog" className="see-more-btn">
                Ver todos os posts
            </Link>
        </div>
    );
}

export default Post2Display;