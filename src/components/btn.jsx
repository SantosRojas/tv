import styled from "styled-components";

export const Btn = styled.button`
    padding: 1rem 2rem;
    background-color: turquoise;
    border-radius: .3rem;
    border: none;
    &:hover{
        cursor: pointer;
    }
`

export const BtnContainer =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem;
`