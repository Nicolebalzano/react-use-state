import languages from "./languages.js";

const ButtonList = ({ onClick, selectedLanguage }) => {
    return (
        <ul className="flex">
            {languages.map((curLanguage) => (
                <li key={curLanguage.id} className="buttons">
                    <button 
                        onClick={() => onClick(curLanguage)} 
                        className={selectedLanguage?.id === curLanguage.id ? "active" : ""}
                    >
                        {curLanguage.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ButtonList;
