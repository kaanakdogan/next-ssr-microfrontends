import { useGlobalContext, useGlobalDispatchContext } from 'home/context';

export default function Button(props) {
  const globalContext = useGlobalContext();
  const globalDispatch = useGlobalDispatchContext();

  return (
    <>
      <div>This is exported from mfe1</div>
      <div>{globalContext}</div>
      <button {...props} onClick={() => {
        globalDispatch(Math.floor(Math.random() * 10))
      }}>
        {props.children}
      </button>
    </>
  )
}