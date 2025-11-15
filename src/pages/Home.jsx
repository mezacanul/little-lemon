import { Button, Card, Image } from "react-bootstrap";
import heroImage from "../assets/restauranfood.jpg";
import specialImage from "../assets/greek_salad.jpg";
import bruchettaImage from "../assets/bruchetta1.jpg";
import lemonDessertImage from "../assets/lemon_dessert.jpg";
import { FaStar } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";

export default function Home() {
    return (
        <div>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </div>
    );
}

function Hero() {
    return (
        <div
            style={{ marginBottom: "8rem" }}
            className="bg-green text-white p-5 d-flex justify-content-center gap-5 align-items-start"
        >
            <div
                style={{
                    width: "65vw",
                    position: "relative",
                }}
            >
                <div className="d-flex flex-column gap-2 align-items-start">
                    <h1 className="display-4 text-yellow">
                        Little Lemon
                    </h1>
                    <p className="lead mb-1">Chicago</p>
                    <p style={{ maxWidth: "20rem" }}>
                        We are a family-owned Mediterranean
                        restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <Button className="btn-warning">
                        {"Reserve a table"}
                    </Button>
                </div>

                <div
                    style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                    }}
                >
                    <Image
                        src={heroImage}
                        alt="Little Lemon"
                        className="rounded"
                        style={{
                            objectFit: "cover",
                            width: "20rem",
                            height: "25rem",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function Specials() {
    const specials = [
        {
            image: specialImage,
            title: "Greek Salad",
            price: "$12.99",
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            image: bruchettaImage,
            title: "Bruchetta",
            price: "$5.99",
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            image: lemonDessertImage,
            title: "Lemon Dessert",
            price: "$8.99",
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
    ];
    return (
        <div className="d-flex justify-content-center w-100 py-4 px-5">
            <div style={{ width: "65vw" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h2>This week's specials!</h2>
                    <Button className="btn-warning">
                        {"Online Menu"}
                    </Button>
                </div>

                <div className="d-flex w-100 gap-4 py-5">
                    {specials.map((special) => (
                        <CardItem
                            key={special.title}
                            {...special}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function CardItem({ image, title, price, description }) {
    return (
        <Card
            style={{ width: "20rem" }}
            className="shadow-sm"
        >
            <Card.Img
                src={image}
                alt="Special"
                style={{
                    objectFit: "cover",
                    height: "10rem",
                }}
            />
            <Card.Body className="p-4 bg-gray">
                <Card.Title className="d-flex justify-content-between mb-4">
                    <span>{title}</span>
                    <span
                        className="text-salmon"
                        style={{
                            fontSize: "1rem",
                        }}
                    >
                        {price}
                    </span>
                </Card.Title>
                <Card.Text>{description}</Card.Text>

                <div
                    className="d-flex align-items-center gap-2 fw-bold"
                    style={{ cursor: "pointer" }}
                >
                    <span>{"Order a delivery"}</span>
                    <MdDeliveryDining
                        style={{ fontSize: "1.5rem" }}
                    />
                </div>
            </Card.Body>
        </Card>
    );
}

function Testimonials() {
    const testimonials = [
        {
            rating: 5,
            image: "pp1.jpg",
            name: "John Doe",
            review: "Delicious food! The service was excellent and the atmosphere was cozy.",
        },
        {
            rating: 5,
            image: "pp2.jpg",
            name: "Jane Doe",
            review: "Really good food! I will definitely come back.",
        },
        {
            rating: 5,
            image: "pp4.jpg",
            name: "Jim Doe",
            review: "I had a great experience here. The food was amazing and the service was excellent.",
        },
        {
            rating: 4,
            image: "pp3.jpg",
            name: "Jill Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
    ];
    return (
        <div className="w-100 py-5 px-5 bg-green">
            <div className="body-container d-flex flex-column gap-4 pb-3">
                <h2 className="text-white text-center mb-4">
                    {"What Our Customers Say"}
                </h2>
                <div
                    className="d-grid gap-4"
                    style={{
                        gridTemplateColumns:
                            "repeat(4, 1fr)",
                        alignItems: "start",
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialItem
                            key={testimonial.name}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TestimonialItem({ rating, image, name, review }) {
    return (
        <div className="p-4 bg-gray rounded-3">
            <div className="d-flex align-items-center gap-2 mb-3">
                <img
                    src={`./src/assets/${image}`}
                    style={{
                        width: "4rem",
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                    }}
                />
                <p className="mb-0">{name}</p>
            </div>
            <Rating value={rating} />
            <p
                style={{ fontSize: "0.9rem" }}
                className="my-3 mb-0"
            >
                {review}
            </p>
        </div>
    );
}

function Rating({ value }) {
    return (
        <div className="d-flex gap-1 w-100 justify-content-start">
            {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                    key={index}
                    color={index < value ? "gold" : "gray"}
                />
            ))}
        </div>
    );
}

function About() {
    return (
        <div className="body-container py-5">
            <div className="d-flex justify-content-between align-items-center py-4">
                <div className="pe-5 w-50">
                    <h2 className="text-green">
                        Little Lemon
                    </h2>
                    <h4 className="mb-4 text-salmon">
                        Chicago
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Quisquam, quos. Amet consectetur
                        adipisicing elit dolor sit amet
                        reprehenderit. Provident, similique
                        ea esse aliquam voluptatem laborum
                        voluptas atque quia. Fugiat, velit
                        tempora impedit vel nihil officiis
                        corrupti quam voluptates eum magnam
                        minus sit fugit.
                    </p>
                </div>
                <div className="position-relative w-50">
                    <Image
                        className="rounded"
                        src={"./src/assets/rest1.jpg"}
                        alt="About"
                        style={{
                            width: "17rem",
                            height: "20rem",
                            objectFit: "cover",
                            marginTop: "7rem",
                        }}
                    />
                    <Image
                        className="rounded"
                        src={"./src/assets/rest2.jpg"}
                        alt="About"
                        style={{
                            width: "17rem",
                            height: "20rem",
                            objectFit: "cover",
                            position: "absolute",
                            right: "0",
                            top: "0",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
