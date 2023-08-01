import './Buttons.css'
type ButtonsType = {
    type?: string,
    label : string
    icon?: React.ReactNode
}
function Buttons({type,label,icon}:ButtonsType) {
    let buttons = 'buttons';
    if(type && type === 'dark'){
        buttons = 'buttons dark';
    }
    return (
        <button className = {buttons}>{icon}{label}</button>
    )
}
export default Buttons