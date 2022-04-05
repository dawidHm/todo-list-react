import "./style.css";

const Form = () => (
    <form className="form" id="form">
        <input className="form__input" type="text" name="addNewTaskInput" placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;