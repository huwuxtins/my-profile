import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkButton({ name, icon, color, width, height, number, onClick, sizeIcon, hoverColor }) {
    const className = `flex mr-3 flex-row items-center ${color} ${hoverColor} rounded-md border-solid border-2 border-white text-center`

    return (
        <button className={className} style={{ width, height }} onClick={onClick}>
            <div style={{ marginLeft: '10px', color: 'white'}}>{number}</div>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <FontAwesomeIcon icon={icon} color='white' width={sizeIcon} height={sizeIcon} />
            <div style={{ padding: '5px', color: 'white', flex: 1  }}>{name}</div>
        </button>
    );
}

export default LinkButton;