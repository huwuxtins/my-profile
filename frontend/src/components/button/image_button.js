import Image from "next/image";

function ImageButton({name, icon, color, width, height, number, onClick}) {
    return ( 
        <div className="icon" style={{borderRadius: '10px', backgroundColor: color}} onClick={onClick}>
            <div style={{padding: '5px', color: 'white'}}>{number}</div>
            <Image src={icon} width={width} height={height} style={{borderRight: `${width} solid white`, padding: '5px'}} alt={name}/>
            <div style={{padding: '5px', color: 'white'}}>{name}</div>
        </div>
    );
}

export default ImageButton;