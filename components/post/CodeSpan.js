export function CodeSpan(props) {
  const lang = props.code || props.lang || props.type || 'jsx'

  return (
    <code className={`language-${lang}`} style={{ wordBreak: 'break-all' }}>
      {props.children}
    </code>
  )
}
