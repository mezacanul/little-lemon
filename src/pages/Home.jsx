import { Button, Card, Image } from "react-bootstrap";
import heroImage from "../assets/restauranfood.jpg";
import specialImage from "../assets/greek_salad.jpg";
import bruchettaImage from "../assets/bruchetta1.jpg";
import lemonDessertImage from "../assets/lemon_dessert.jpg";

export default function Home() {
    return (
        <div>
            <Hero />
            <Specials />
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
        <Card style={{ width: "20rem" }} className="shadow-sm">
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

                <Card.Text className="fw-bold">
                    {"Order a delivery"}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
