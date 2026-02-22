import img from '../img/hero-img.svg'

export default function Hero() {
    return (
        <section className="hero">
            <img className='hero__img' src={img} alt="yanrin" draggable={false}
                onDragStart={(e) => e.preventDefault()} />
        </section>
    )
}