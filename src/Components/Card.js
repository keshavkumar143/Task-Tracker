import '../App.css';
import CustomButton from './CustomButton';

function Card(props) {
    return (
        <div className='Card' style={{ backgroundColor: props.complete === true && ' lightgreen', color: props.complete === true && 'white' }} >

            <h3> {props.title} </h3>
            <p> {props.des}</p>
            <div className='btnwrapper'>
                <CustomButton color='White' bg='#0c379c' name='Complete' click={props.update} />
                <CustomButton color='White' bg='rgb(214, 10, 10)' name='Delete' click={props.delete} />
            </div>
        </div>
    );
}

export default Card;