import ReactPlayer from "react-player";
import styled from "styled-components";
import { Btn, BtnContainer } from "./btn";

const CardView = styled.div`
    display: flex;
    border: none;
    background-color: #161616;
    border-radius: 1rem;
    margin: 0.3rem;
    overflow-y: hidden;
    box-sizing:border-box;
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #292727;
    height: 100vh;
`

const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
    color: turquoise;
`
export const Tv = ({ canal,nextChanel,prevChanel,stateBtnA,stateBtnS }) => {
    return (
        <Container>
            <CardView>
                <ReactPlayer
                    url={canal.url}
                    controls
                    width="100%"
                    height="100%" />
            </CardView>

            <BtnContainer>
                <Btn onClick={prevChanel} disabled ={!stateBtnA}>Atras</Btn>
                <Title>{canal.title}</Title>
                <Btn onClick={nextChanel} disabled = {!stateBtnS}>Siguiente</Btn>
            </BtnContainer>
        </Container>
    )
}