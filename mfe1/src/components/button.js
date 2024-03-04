export default function Button(props) {
  return (
    <>
      <div>This is exported from mfe1</div>
      <button {...props}>{props.children}</button>
    </>
  )
}