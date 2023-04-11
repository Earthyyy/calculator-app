import { useDispatch, useSelector } from "react-redux";
import { addInput, computeInput, deleteInput, resetInput } from "../features/inputSlice";

const Key = ({value,color,span}) => {
  const dispatch = useDispatch();
  

  let keyStyling;
  let colSpan;

  switch (span) {
    case 1:
        colSpan = 'col-span-1'
        break;
    case 2:
        colSpan = 'col-span-2'
        break;
    default:
        colSpan = 'col-span-1'
        break;
    }


  switch (color) {
    case 'primary':
        keyStyling = 'primary-key'
        break;
    case 'secondary':
        keyStyling = 'secondary-key'
        break;
    case 'tertiary':
        keyStyling = 'tertiary-key'
        break;
    default:
        keyStyling = 'primary-key'
        break;
    }

  const handleClick = () => {
    if (value === "DEL") {
      dispatch(deleteInput());
    } else if (value === "RESET") {
      dispatch(resetInput());
    } else if (value === "=") {
      dispatch(computeInput());
    } else {
      dispatch(addInput(value));
    }
  }

  return (
    <button className={`${colSpan} ${keyStyling} w-auto h-[3.75rem] flex justify-center items-center cursor-pointer rounded-[0.3125rem] desktop:rounded-[.625rem] hover:filter hover:brightness-[1.2]`} onClick={handleClick}>
        <span className={color === 'tertiary' ? 'text-[2rem] desktop:text-[2.5rem]' : 'text-[1.25rem] desktop:text-[1.75rem]'}>{value}</span>
    </button>
  )
}

export default Key