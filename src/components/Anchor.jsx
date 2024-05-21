import './Anchor.css'
;
export default function Anchor ({nombre, onMouseOver, onMouseOut}) {

    return <a  className='anchorStyle' onMouseOver={onMouseOver} onMouseOut={onMouseOut}> {nombre} </a>
}