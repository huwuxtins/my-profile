import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkButton({ name, icon, color, width, height, number, onClick, sizeIcon, hoverColor }) {
    const className = `flex mr-3 flex-row items-center bg-${color} hover:bg-${hoverColor} rounded-md border-solid border-2 border-white`

    return (
        <button className={className} style={{ width, height }} onClick={onClick}>
            <div style={{ padding: '5px', color: 'white' }}>{number}</div>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <FontAwesomeIcon icon={icon} color='white' width={sizeIcon} height={sizeIcon} />
            <div style={{ padding: '5px', color: 'white' }}>{name}</div>
        </button>
    );
}

export default LinkButton;