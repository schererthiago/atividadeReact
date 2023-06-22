import { BoxPrincipalDiv } from "./styled"
import { BoxPrincipalImg } from "./styled"

function Card (props) {

    return(
        <>
        <BoxPrincipalDiv onClick={props.reproduz}>
                    <BoxPrincipalImg src={props.link} alt=""/>
                    <h4>{props.titulo}</h4>
        </BoxPrincipalDiv>
        </>
    )
}

export default Card 