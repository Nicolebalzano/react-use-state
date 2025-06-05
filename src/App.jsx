import { useState } from "react";
import ButtonList from "./Buttons";
import InfoCards from "./InfoCard";

function App() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className="container">
          <h1>Learn Web Development</h1>
            <ButtonList onClick={handleLanguageClick} selectedLanguage={selectedLanguage} />
            {selectedLanguage && <InfoCards language={selectedLanguage} />}
        </div>
    );
}

export default App;

