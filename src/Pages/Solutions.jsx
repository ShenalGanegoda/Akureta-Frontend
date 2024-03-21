import "./CSS/Solutions.css";

const data = [
    {
        title: "The food was shite",
        description: "Skill issue to be honest."
    },
    {
        title: "The food was shite",
        description: "Skill issue to be honest."
    },
    {
        title: "The food was shite",
        description: "Skill issue to be honest."
    },
    {
        title: "The food was shite",
        description: "Skill issue to be honest."
    }
];

const Solution = (title, description) => {
    return <div className="solutions-card">
        <h3 className="solutions-card-title">{title}</h3>
        <div className="solutions-card-body">
            <p>{description}</p>
        </div>
    </div>
}

const Solutions = () => {
    return <div className="solutions-main">
        <h1 className="solutions-title">Solution Generation</h1>
        <hr />
        {data.map(({title, description}) => Solution(title, description))}
    </div>
}

export default Solutions;