export function CodeSpan(props) {
  const lang = props.code || props.lang || props.type || 'jsx'

  return (
    <code className={`lang-${lang}`} style={{ wordBreak: 'break-all' }}>
      {props.children}
    </code>
  )
}
