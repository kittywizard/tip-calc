import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    font-family: "Gantari", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;
    background: rgba(16,96,135,.8);
    transition: background 1s ease-in-out;

    :hover,
    :focus {
        background: rgba(72,158,200,1);
    }
`;