// import Button from "../molecules/Button.jsx"
import '../../style.css';
import Button from '../atoms/Button.';
import SelectSize from '../atoms/SelectSize';

function ProductCard(props) {
    return (
        <>
            <div class="col-xs-6 col-sm-3">
                <div class="product-card">
                    {/* Card header */}
                    <div class="rat-3-4">
                        <figure class="rat-content">
                            <img src="https://holygrailcss.github.io/assets/placeholder/2-3.jpg" alt="" />
                        </figure>
                    </div>

                    {/* Card body */}
                    <div class="product-card-body">
                        <h5 class="h2">{props.title}</h5>
                        <p>
                            {props.description}
                        </p>
                        <SelectSize></SelectSize>
                        <Button content="Agregar a la cesta"></Button>
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProductCard