import {useEffect} from "react";
import {Passcode} from "./utils.ts";
import './passvideo.styles.scss';
// import {hashStringSHA256} from "../../utils/hashStringSHA256.ts";

export function PasscodeComponent() {
  // const [pass, setPass] = useState<string>('');

  useEffect(()=> {
    // setTimeout(()=> {
    //   const pc = new Passcode(".passcode");
    //   console.log(pc)
    //   // hashStringSHA256('122710').then(hash => console.log(hash));
    // },300);
    const pc = new Passcode(".passcode");
    console.log(pc)
  },[]);
  return (
      <div className="passcode-wrapper">
        <form className="passcode" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="digit1" className="passcode__sr">1st Digit</label>
          <input id="digit1" className="passcode__digit" type="number" name="digit1" min="0" max="9" placeholder=" "/>
          <label htmlFor="digit2" className="passcode__sr">2nd Digit</label>
          <input id="digit2" className="passcode__digit" type="number" name="digit2" min="0" max="9" placeholder=" "/>
          <label htmlFor="digit3" className="passcode__sr">3rd Digit</label>
          <input id="digit3" className="passcode__digit" type="number" name="digit3" min="0" max="9" placeholder=" "/>
          <label htmlFor="digit4" className="passcode__sr">4th Digit</label>
          <input id="digit4" className="passcode__digit" type="number" name="digit4" min="0" max="9" placeholder=" "/>
          <button className="passcode__button" type="button" data-enter>
            <svg className="passcode__arrow" viewBox="0 0 16 16" width="16px" height="16px">
              <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 1,15 8,8 15"/>
                <polyline points="1 8,15 8"/>
              </g>
            </svg>
            <span className="passcode__sr">Enter</span>
          </button>
          <div className="passcode__caret"></div>
          <div className="passcode__caret-move passcode__caret-move--1"></div>
          <div className="passcode__caret-move passcode__caret-move--2"></div>
          <div className="passcode__caret-move passcode__caret-move--3"></div>
          <div className="passcode__caret-move passcode__caret-move--4"></div>
          <div className="passcode__caret-move passcode__caret-move--5"></div>
        </form>
      </div>
  )
}