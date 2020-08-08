import React from "react";
import whastappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/16552277?s=460&u=4d84a52c11f5fc74d73ff3e1ec460bfea4337daa&v=4"
                    alt="Matheus Oliveira"
                />
                <div>
                    <strong>Matheus Oliveira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br />
                <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida
                das pessoas através de experiências. Mais de 200.000 pessoas já
                passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whastappIcon} alt="" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
