import { Header, Container, Box, Chevronright, Chevronleft, Middle, Box2 } from "./styled"
import { Link } from "react-router-dom"
import itemFem from "../../../itemfem.json"
import itemFem2 from "../../../itemFem2.json"
import Modal from "react-modal"
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import "./style.css"

export default function PageFem() {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeft = () => {
        let x = scrollX + 250
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRight = () => {
        let x = scrollX - 250
        let listW = itemFem.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) + 90;
        }
        setScrollX(x)
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [image, setImage] = useState('')

    const openModal = (image) => {
        setImage(image)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setImage("")
    }


    return (
        <>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMMxVKb0821Bi4c06NVQxxgE4bRWvSnUeeoH3uz9dtr92cUnkOrqlMIRgz-Dp-YbzaGQ&usqp=CAU" alt="logo-kallifon" />
                <Link to={"/homescreen"}><button>
                    <span>Voltar</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 74 74"
                        height="34"
                        width="34"
                    >
                        <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                        <path
                            fill="black"
                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        ></path>
                    </svg>
                </button>
                </Link>
            </Header>

            <Container style={{ width: itemFem.length * 150, marginLeft: scrollX }}>
                <Chevronright onClick={handleLeft}>
                    <FaCircleChevronLeft size={30} color="white" />
                </Chevronright>

                {itemFem.map((item) => (
                    <Box key={item.id} >
                        <img src={item.img} alt="" onClick={() => openModal(item.img)}/>
                    </Box>
                ))}

                <Chevronleft onClick={handleRight}>
                    <FaCircleChevronLeft size={30} color="white" />
                </Chevronleft>
            </Container>

            <Middle>
                {
                    itemFem2.map((item) => (
                        <Box2 key={item.id} >
                            <img src={item.img} alt="" onClick={() => openModal(item.img)}/>
                        </Box2>
                    ))
                }
            </Middle>

                <Modal 
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Imagem em tela"
                    className="full-screen"
                    overlayClassName="overlay"
                    >
                        <img src={image} alt="" className="fullscreen" />
                        <button onClick={closeModal} className="closebutton">
                    <span>Voltar</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 74 74"
                        height="34"
                        width="34"
                    >
                        <circle strokeWidth={4} stroke="black" r="35.5" cy="37" cx="37"></circle>
                        <path
                            fill="black"
                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        ></path>
                    </svg>
                </button>
                    </Modal>
        </>
    )
}
