import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImageButton({ name, icon, color, width, height, number, onClick }) {
    return (
        <div className="flex mr-3 flex-row items-center" style={{ borderRadius: '10px', backgroundColor: color, width, height}} onClick={onClick}>
            <div style={{ padding: '5px', color: 'white' }}>{number}</div>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <FontAwesomeIcon icon={icon} color={(icon === faSun? 'black': 'white')} width='20px' height="20px"/>
            <div style={{ padding: '5px', color: 'white' }}>{name}</div>
        </div>
    );
}

export default ImageButton;