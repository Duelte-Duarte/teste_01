import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    padding: 0px;
    margin: 0px;
`;

export const Navbar = styled.div`
    box-shadow: 0px 0px 5px black;
    justify-content: space-between;
    background-color: #F44336;
    position: absolute;
    display: flex;
    height: 50px;
    width: 100%;
    
    .menu {
        align-items: center;
        display: flex;
        height: 100%;
        z-index: 9;
        a {
            text-decoration: none;
            padding: 0px 30px;
            line-height: 50px;
            font-size: 18px;
            display: block;
            height: 100%;
            color: white;
        }
        a:hover {
            background-color: white;
            color: black;
        }
        a.active {
            background-color: white;
            color: black;
        }
        a.active:hover {
            background-color: #CCCCCC;
        }
    }

    .toggle-mobile {
        background-color: #fff;
        display: none;
        border: none;
        height: 100%;
        width: 50px;
    }

    @media screen and (max-width: 600px) {
        .menu {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
            a {
                &:not(:first-child) {
                    display: ${props => props.toggleMenu ? 'block' : 'none'};
                    background-color: #fff;
                    width: 100%;
                    color: #000;
                    &:hover {
                        background-color: #ccc;
                    }
                }
            }
        }
        .toggle-mobile {
            display: block;
        }
    }
`;

export const Header = styled.div`
    background-color: #F44336;
    padding-top: 50px;
    .content {
        height: 470px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2em;
        display: flex;
        color: white;
        h1 {
            font-weight: normal;
        }
        p {
            margin: 28px 0px;
            font-size: 22px;
        }
        button {
            background-color: black;
            margin-top: 16px;
            font-size: .8em;
            cursor: pointer;
            padding: 15px;
            color: white;
        }
        button:hover {
            background-color: #CCCCCC;
            border: #CCCCCC;
            color: black;
        }
    }
`;

export const Main = styled.div`
`;

export const Row = styled.div`
    flex-direction: row;
    display: flex;
    margin: auto;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Section = styled.div`
    padding: 20px 0px;

    h1, p {
        padding: 20px 0px;
    }
    .p1 {
        color: #757575;
    }
`;

export const Icon = styled.div`
    padding: 40px 0px;
    align-self: center;
`;

export const SessionPhrase = styled.div`
    background-color: #666666;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 200px;
    color: white;
`;

export const Footer = styled.div`
    height: 30vh;
    text-align: center;
    margin-top: 100px;

    svg {
        color: #666666;
        cursor: pointer;
        margin: 0px 5px;
        &:hover {
            opacity: 0.6;
        }
    }
`;

export const Content = styled.div.attrs({
    className: 'content'
})`
    width: 920px;
    margin: auto;
    @media screen and (max-width: 920px) {
        margin: 0px 16px;
        width: auto;
    }
`;