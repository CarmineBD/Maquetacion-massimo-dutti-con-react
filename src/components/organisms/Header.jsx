// import Button from "../molecules/Button.jsx"
import '../../style.css';

function Header(props) {
    return (
        <header className={props.className}>
            <h1 className="head-s">{props.title}</h1>
        </header>
    )


}

export default Header