
const InfoCards = ({ language }) => {
    return (
        <div className="card container">
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    );
};

export default InfoCards;