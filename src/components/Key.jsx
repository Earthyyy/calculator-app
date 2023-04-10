const Key = ({value,color,span}) => {
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

  return (
    <button className={`${colSpan} ${keyStyling} w-auto h-[3.75rem] flex justify-center items-center cursor-pointer rounded-[0.3125rem] hover:filter hover:brightness-150`}>
        <span className={color === 'tertiary' ? 'text-[2rem]' : 'text-[1.25rem]'}>{value}</span>
    </button>
  )
}

export default Key