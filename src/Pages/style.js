import styled from "styled-components";

export const Container = styled.div`
    margin: 0px;
    padding: 0px;
`;

export const Header = styled.div`
    background-color: #F44336;
    margin: auto;
`;

export const Navbar = styled.div`
    box-shadow: 0px 0px 5px black;
    padding: 15px 15px 15px 0px;
    justify-content: space-between;
    display: flex;
    
    .menu {
        display: none;
    }

    a {
        text-decoration: none;
        padding: 15px;
        color: white;
        padding-left: 30px;
        padding-right: 30px ;
    }
    
    a:hover {
        background-color: white;
        color: black;
    }

    .a1 {
        background-color: white;
        color: black;
    }
    .a1:hover {
        background-color: #CCCCCC;
    }
`;

export const Content = styled.div`
    background-color: #F44336;
    height: 60vh;
    color: white;
    text-align: center;
    font-size: 2em;
    button {
        background-color: black;
        color: white;
        font-size: .8em;
        padding: 15px;
        cursor: pointer;
    }
    button:hover {
        background-color: #CCCCCC;
        border: #CCCCCC;
        color: black;
    }
`;

export const Main = styled.div`
`;

export const Content_2 = styled.div`
    flex-direction: row;
    width: 1000px;
    display: flex;
    margin: auto;
    flex-wrap: wrap;
`;

export const Section = styled.div`
    margin: right: inherit;;
    padding: 20px 0px;
    width: 60%;

    h1, p {
        padding: 20px 0px;
    }
    .p1 {
        color: #757575;
    }
`;

export const Image1 = styled.div`
    padding: 40px 0px;
    margin: auto;
`;

export const Content_3 = styled.div`
    background-color: #f1f1f1;
    flex-wrap: wrap;
`;

export const Wid = styled.div`
    flex-direction: row;
    width: 1000px;
    display: flex;
    margin: auto;
`;

export const Section_2 = styled.div`
    margin: left: inherit;;
    padding: 20px 0px;
    width: 60%;

    h1, p {
        padding: 20px 0px;
    }
    .p1 {
        color: #757575;
    }
`;

export const Content_4 = styled.div`
    background-color: #666666;
    height: 200px;
    color: white;
    text-align: center;
    margin: auto;

    h2 {
        padding-top: 80px;
    }
`;

export const Footer = styled.div`
    height: 30vh;
    text-align: center;
    margin-top: 100px;

    #fa1:hover {
        background-color: #CCCCCC;
    }
`;

