function Menu({ linkList }) {
    return (
        <nav>
            <ul>
                {linkList.map((link) => (
                    <li key={link.id}>
                        <a href={link.href}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu