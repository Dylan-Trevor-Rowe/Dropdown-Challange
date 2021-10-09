import React, { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import './FilterSelect.css'

export const FilterDropDown = () => {

  const [text, setText] = useState('All Vectors')
  const [arrowChange, setArrowChange] = useState(false)

  const node = useRef();

  const onChange = (e) => setText(e.target.value)

  const handleClick = e => {
    if (node.current !== (e.target)) {
      return;
    }
    setArrowChange(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const arrowToggleUp = () => setArrowChange(true)
  const arrowToggleDown = () => setArrowChange(false)

  if (!arrowChange) {

    return (
      <div className="container">
        <div className="filter_Div">
          <div className="arrow">
            <div className="state_Text">{text}</div>
            <MdKeyboardArrowDown
              onClick={arrowToggleUp}>
            </MdKeyboardArrowDown>
          </div>
        </div>
      </div>
    )

  } else {

    return (
      <div ref={node} className="container">
        <div className="filter_DivTwo">
          <div className="arrow_Two">
            <div className="state_Text">{text}</div>
            <MdKeyboardArrowDown
              className="arrowChange"
              onClick={arrowToggleDown}>
            </MdKeyboardArrowDown>
          </div>
          <div className="form_Container_Row">
            <div className="form_Container">
              <form className="radio_Group">
                <div className="radio-item">
                  <input type="radio" 
                    onChange={onChange}
                    id="radioitema"
                    name="radioitem"
                    value="All Vectors"/>
                  <label htmlFor="radioitema">All</label>
                </div>
                <div className="radio-item">
                  <input type="radio" 
                    onChange={onChange}
                    id="radioitemb"
                    name="radioitem"
                    value="Free Vectors"/>
                  <label htmlFor="radioitemb">Free</label>
                </div>
                <div className="radio-item">
                  <input type="radio" 
                    onChange={onChange}
                    id="radioitemc"
                    name="radioitem"
                    value="Pro Vectors"/>
                  <label htmlFor="radioitemc">Pro</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}