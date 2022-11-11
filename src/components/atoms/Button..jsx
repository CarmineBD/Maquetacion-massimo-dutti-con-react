// import Button from "../molecules/Button.jsx"
import '../../style.css';

function Button(props) {
    return (
        <button class="btn-primary btn--full">
            {props.content}
        </button>
    )


}

export default Button