import styled from "styled-components";

export const Header = styled.header`
    background-color: #8C3A60;
    font-family: Poppins, sans-serif;
    color: #f2b6c1;
    height: 2em;
    display: grid;
    place-items: center;
    font-size: 1.5em;
    text-shadow: #000 0px 0px 10px;
`;

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    padding-bottom: 4em;
`;

export const Arcticle = styled.article`
    width: 85%;
    height: 35%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    overflow: hidden;
    background-color: #8C3A60;
    display: flex;

    div > img{
      object-fit: cover;
    }
`;

export const Info = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2b6c1;
    flex-direction: column;
    gap: 1em;
    h1{
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 1em;
    }

    a{
      text-decoration: none;
      text-underline-offset: 2px;
      color: #8C3A60;
      transition: .6s all ease-out;

      &:hover{
        text-decoration: underline;
        text-underline-offset: 6px;
      }
    }

    /* From Uiverse.io by alexmaracinaru */ 

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