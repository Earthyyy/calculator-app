import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../features/themeSlice"


const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const handleChange = ({target : {
    value
  }}) => {
    dispatch(setTheme(value === 'default' ? '' : value))
  }
  return (
    <div className="flex gap-[1.625rem] items-end">
      <h4 className="text-xs/[11.04px] text-header uppercase mb-[5px]">theme</h4>
      <div className="grid gap-[5px]">
          <div className="flex justify-around text-xs text-header gap-[0.6875rem] px-[7px]">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>


          <ul className="flex justify-between gap-3 p-[5px] bg-toggle rounded-xl" onChange={handleChange}>
            <li>
              <input type="radio" name="theme" id="default" value="default" className="hidden peer" defaultChecked/>
              <label htmlFor="default" className="radio-btn"></label>
            </li>

            <li>
              <input type="radio" name="theme" id="light" value="light" className="hidden peer" />
              <label htmlFor="light" className="radio-btn"></label>
            </li>

            <li>
              <input type="radio" name="theme" id="dark" value="dark" className="hidden peer" />
              <label htmlFor="dark" className="radio-btn"></label>
            </li>

          </ul>
      </div>

      


    </div>
  )
}

export default ThemeSwitcher