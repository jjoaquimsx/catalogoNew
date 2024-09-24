import styled from "styled-components";

export const Header = styled.header`
    background: #8C3A60;
    color: #f2b6c1;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50%;

    img{
        width: 12%;
        border-radius: 10px;
    }

    a{
        text-decoration: none;
    }

    button {
    cursor: pointer;
    font-weight: 700;
    transition: all 0.2s;
    padding: 0 15px;
    border-radius: 100px;
    background: #f2b6c1;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    font-size: 1em;
    color: #8C3A60;
    
    span{
    font-family: Poppins;
    }
}


button > svg {
  width: 25px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

button:hover svg {
  transform: translateX(5px);
}

button:active {
  transform: scale(0.95);
}
`;

export const Container = styled.nav`
    width: 100vw;
    padding: 30px 30px;
    display: flex;
    gap: 20px;
    transition: .8s ease;
`;

export const Box = styled.div`
    max-width: 150px;
    max-height: 200px;
    box-shadow: 0px 0px 8px rgb(0, 0, 0, .6);
    display: flex;
    gap: 20px;
    transition: .8s ease;
    img{
        width: 100%;
}
`;

export const Chevronright = styled.button`
    background-color: rgba(0, 0, 0, .5);
    width: 40px;
    height: 100px;
    border: none;

    position: absolute;
    bottom: 50%;
    left: 20px;
    transform: translate(-50%, -75%);
`;

export const Chevronleft = styled.button`
    background-color: rgba(0, 0, 0, .5);
    width: 40px;
    height: 100px;
    border: none;

    position: absolute;
    bottom: 50%;
    right: -20px;
    transform: translate(-50%, -75%);

    svg{
        transform: rotate(180deg);
    }
`;

export const Middle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin: 20px 0px 20px 0;
`;

export const Box2 = styled.div`
    max-width: 150px;
    max-height: 200px;
    box-shadow: 0px 0px 8px rgb(0, 0, 0, .6);
    display: flex;
    gap: 20px;
    transition: .8s ease;
    flex-wrap: wrap;
    margin-bottom: 50px;

    img{
        width: 100%;
        overflow: hidden;
}
`;

