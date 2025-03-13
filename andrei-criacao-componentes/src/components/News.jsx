function News({ title, newsList }) {
    return (
        <section>
            <h2>{title}</h2>
            {newsList.map((news) => (
                <p key={news.id}>{news.name}</p>
            ))}
        </section>
    )
}

export default News