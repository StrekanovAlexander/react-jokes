const styleReaded = {
    color: 'gray',
    textDecoration: 'line-through'
}

function JokeItem(props) {
    return (
        <div className="joke-item">
            <p style={props.joke.isRead ? styleReaded : null}>{props.joke.value}</p>
            <div className="checkbox">
                <input type="checkbox" 
                    checked={props.joke.isRead}
                    onChange={() => props.handleRead(props.joke.id)} 
                />
                <label>Readed</label>
            </div>
        </div>
    )
}

export default JokeItem