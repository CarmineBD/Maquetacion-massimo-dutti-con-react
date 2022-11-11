import '../../style.css';
import ProductCard from '../molecules/ProductCard';

function Main(props) {
    return (
        <main className={props.className}>
            {/* primera row de cards */}
            <div class="is-flex w-100 flex-wrap">
                <ProductCard
                    title="Titulo de la card 1"
                    description="Esta card tiene un tamaño más alto de lo normal para demostrar empuja los elementos inferiores Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />
                <ProductCard
                    title="Titulo de la card 2"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit," />
                <ProductCard
                    title="Titulo de la card 3"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit," />
                <ProductCard
                    title="Titulo de la card 4"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />

            </div>

            {/* segunda row de cards */}
            <div class="is-flex w-100 flex-wrap">
                <ProductCard
                    title="Titulo de la card 5"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />
                <ProductCard
                    title="Titulo de la card 6"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />
                <ProductCard
                    title="Titulo de la card 7"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />
                <ProductCard
                    title="Titulo de la card 8"
                    description="Lorem ipsum dolor, onetur adipisicing elit. Cumque cum
                    minima quaerat provident facere eligendi voluptas tenetur
                    totam ullam suscipit, odit nisi dolor sequi doloremque,
                    excepturi animi delectus corporis? Laborum." />

            </div>




        </main>
    )


}

export default Main