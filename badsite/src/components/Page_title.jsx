import './Page_title.css';

function Page_title({ title }) {
    return (
        <div className="title_container">
            <h1>{title}</h1>
        </div>
    );
}

export default Page_title;