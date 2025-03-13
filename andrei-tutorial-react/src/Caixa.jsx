function caixa(props) {
    return (
        <div style={{border: '1px solid black', width: '90vw'}}>
            <img src={props.img} style={{width: '300px'}} />
            <p>{props.texto}</p>
            {props.children}
        </div>
    );
}

export default caixa