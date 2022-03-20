import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export function useModalWithoutBackground() {
  const [showModalState, setShowModalState] = useState(false)
  const modalRef = useRef()

  const openModal = () => setShowModalState(true)
  const closeModal = () => setShowModalState(false)

  function Modal(props) {
    useEffect(() => {
      function closeModalOnEscape(e) {
        if (e.key === 'Escape') closeModal()
      }

      function isClickedElOutsideThisEl(clickedEl, thisEl) {
        return !thisEl.contains(clickedEl)
      }

      function closeModalOnClickOutside(e) {
        const modalWindow = modalRef.current
        const clickedEl = e.target
        if (!modalWindow) return
        if (isClickedElOutsideThisEl(clickedEl, modalWindow)) closeModal()
      }

      document.addEventListener('mousedown', closeModalOnClickOutside)
      document.addEventListener('keydown', closeModalOnEscape)

      return () => {
        document.removeEventListener('mousedown', closeModalOnClickOutside)
        document.removeEventListener('keydown', closeModalOnEscape)
      }
    }, [])

    return (
      <Box ref={modalRef}>
        <CloseBtn onClick={closeModal} />
        {props.children}
      </Box>
    )
  }

  return [showModalState, openModal, Modal]
}

const Box = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20vh;
  color: white;
  background-color: #505050;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #8b8b8b;
`

const CloseBtn = styled.span`
  position: absolute;
  top: -48px;
  right: -10px;
  color: #4e4e4e;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    transition: color 0.3s ease;
    color: red;
  }

  &:after {
    content: '×';
  }
`
