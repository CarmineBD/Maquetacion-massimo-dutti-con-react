// import Button from "../molecules/Button.jsx"
import '../../style.css';

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
                        <div class="select select-flat">
                            <select>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="l">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <button class="btn-primary btn--full">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProductCard