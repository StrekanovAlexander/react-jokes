function LoadProcess(props) {
    return (
        <div className="load">
            <div>{props.title}</div>
            <img src="/images/loading.gif" alt={props.title} />
        </div>
    )
}

export default LoadProcess