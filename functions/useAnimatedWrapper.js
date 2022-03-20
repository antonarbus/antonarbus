import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function useAnimatedWrapper(args) {
  const options = {
    animationCss: {
      keyframes: `
        from { transform: scaleY(0); }
        to { transform: scaleY(1); }
      `,
      animationDuration: '0.3s',
      animationTimingFunction: 'ease-in-out',
      animationDelay: '0s',
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards',
      ...args?.animationCss,
    },
    animationEndFunc: args?.animationEndFunc || null,
    wrapperCss: { ...args?.wrapperCss || '' },
  }

  const [animationState, setAnimationState] = React.useState(false)
  const turnAnimationOn = () => setAnimationState(true)
  const turnAnimationOff = () => setAnimationState(false)
  const turnAnimationOnMemoized = React.useCallback(turnAnimationOn, [])
  const turnAnimationOffMemoized = React.useCallback(turnAnimationOff, [])

  function AnimationWrapper(props) {
    return (
      <Div
        style={!!options?.wrapperCss && options.wrapperCss}
        onAnimationEnd={() => {
          setAnimationState(false)
          !!options?.animationEndFunc && options.animationEndFunc()
        }}
        isAnimationOn={animationState}
        css={options.animationCss}
      >
        {props.children}
      </Div>
    )
  }

  return [AnimationWrapper, turnAnimationOnMemoized, turnAnimationOffMemoized]
}

const animationName = keyframeRules => keyframes`${keyframeRules}`

const Div = styled.div`
  display: inline-block;

  animation-name: ${props => props.isAnimationOn ? animationName(props.css.keyframes) : ''};
  animation-duration: ${props => props.css.animationDuration};
  animation-timing-function: ${props => props.css.animationTimingFunction};
  animation-delay: ${props => props.css.animationDelay};
  animation-iteration-count: ${props => props.css.animationIterationCount};
  animation-direction: ${props => props.css.animationDirection};
  animation-fill-mode: ${props => props.css.animationFillMode};
`
