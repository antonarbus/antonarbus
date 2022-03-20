import { useEffect, useState } from 'react'
import styled from 'styled-components'

export function useModalWithBackground() {
  const [showModalState, setShowModalState] = useState(false)
  const openModal = () => setShowModalState(true)
  const closeModal = () => setShowModalState(false)

  function Modal(props) {
    // prevent body scroll & prevent jumping when scrollbar gets hidden
    document.body.style.width = window.getComputedStyle(document.body).width
    document.body.style.overflowY = 'hidden'

    useEffect(() => {
      function closeModalOnEscape(e) {
        if (e.key === 'Escape') closeModal()
      }

      document.addEventListener('keydown', closeModalOnEscape)

      return () => {
        // on unmount put back scrolling & original width
        document.body.style.overflowY = 'auto'
        document.body.style.width = 'auto'
        // do not listen for Esc
        document.removeEventListener('keydown', closeModalOnEscape)
      }
    }, [])

    return (
      <Bkg onClick={closeModal}>
        <Container onClick={e => e.stopPropagation()}>
          <CloseBtn onClick={closeModal} />
          {props.children}
        </Container>
      </Bkg>
    )
  }

  return [showModalState, openModal, Modal]
}

const Bkg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000b5;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-start;
  padding-top: 20vh;
  z-index: 1000;
  backdrop-filter: blur(4px);
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px 0px #8b8b8b; */
  /* border: 2px solid #494949; */
  background-color: transparent;
  background-image: linear-gradient(to right bottom, rgb(255 255 255 / 70%), rgb(255 255 255 / 90%));
`

const CloseBtn = styled.span`
  position: absolute;
  top: -48px;
  right: -10px;
  color: #c1c1c1;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    transition: color 0.3s ease;
    color: white;
  }

  &:after {
    content: '×';
  }
`
