import styled from 'styled-components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAnimatedWrapper from '../../../helpers/functions/useAnimatedWrapper'

export function ShowMoreBtn() {
  const dispatch = useDispatch()
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay)
  const options = {
    wrapperCss: { background: '#00000042', transform: 'translateX(-101%)', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
    animationEndFunc: () => dispatch({ type: 'show more pages', maxNumOfPosts: postsOnDisplayState.length }),
    animationCss: { animationDuration: '5s', keyframes: 'from { transform: translateX(-101%) } to { transform: translateX(0) }' },
  }
  const [AnimationWrapper, turnAnimationOn, turnAnimationOff] = useAnimatedWrapper(options)
  const ref = React.useRef()

  React.useEffect(() => {
    document.addEventListener('click', turnAnimationOff)
    return () => document.removeEventListener('click', turnAnimationOff)
  }, [turnAnimationOff])

  React.useEffect(() => {
    const target = ref.current
    const options = { threshold: 0.95 }

    function callback(entries, observer) {
      if (entries[0].isIntersecting) turnAnimationOn()
      if (!entries[0].isIntersecting) turnAnimationOff()
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(target)

    return () => {
      observer.unobserve(target)
      observer.disconnect()
    }
  }, [turnAnimationOn, turnAnimationOff])

  return (
    <Btn
      onClick={() => dispatch({ type: 'show more pages', maxNumOfPosts: postsOnDisplayState.length })}
      ref={ref}
    >
      Show more
      <AnimationWrapper />
    </Btn>
  )
}

const Btn = styled.button`
  position: relative;
  margin-top: 20px;
  padding: 0.7em;
  cursor: pointer;
  border-radius: 10px;
  border-width: 0px;
  background-color: #6dbadd;
  color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  text-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  font-weight: bold;
  overflow: hidden;
  /* to fix overflow problem on iphone, otherwise overflow: hidden not working properly */
  z-index: 10;
  &:hover { background-color: #4eb2df }
`
