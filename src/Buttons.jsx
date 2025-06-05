import languages from "./languages.js"

const ButtonList = () => {
    return languages.map((curLanguage) => (
       
            <li key={curLanguage.id} className="buttons"><a href="">{curLanguage.title}</a></li>
      
    ))
 
}
console.log(ButtonList)
export default ButtonList;