import "../styles/TeamCard.css"
import Bill from "../assets/Billzinho.jpg"

export default function TeamCard(props) {
    return(
        <div className="teamCardBox">
            <div className="imgTeamBox">
                <img src={props.image ?? Bill} alt="" />
            </div>
            <div className="infoTeamBox">
                <p className="namePerson">{props.name ?? "Fernando Jorge"}</p>
                <p className="functionPerson">{props.function ?? "Programador"}</p>
                <p className="descPerson">{props.desc ?? "Bill gates é um homem muito legal, ele fez o windows e sambou na cara da apple e ainda ta vivo, um velhinho muito gente boa e rico. um dia desse ele me deu 55 reais"}</p>
            </div>
        </div>
    )
}

