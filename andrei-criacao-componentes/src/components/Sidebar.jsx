function Menu({ title, articleList }) {
    return (
        <aside>
            <h3>{title}</h3>
            <ul>
                {articleList.map((article) => (
                    <li key={article.id}>{article.name}</li>
                ))}
            </ul>
        </aside>
    )
}

export default Menu