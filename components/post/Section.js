import styled from 'styled-components'

export function Section(props) {
  return <SectionStyled className="section">{props.children}</SectionStyled>
}

const SectionStyled = styled.section`
  border-radius: 10px;
  font-size: 16px;
  padding: 20px;
  background: white;
  position: relative;
  line-height: 1.8;
  background-color: transparent;
  background-image: linear-gradient(to right bottom,rgb(255 255 255 / 90%),rgb(255 255 255 / 90%));
  box-shadow: #80808073 0px 0px 10px;
`
