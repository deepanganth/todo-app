import './styles.css';

function Card(props){
    return(
        <div>
            <div className="box">
                <img src={props.url} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;