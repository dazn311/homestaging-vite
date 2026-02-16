export class Passcode {
  code = 5555; // enter this to unlock
  unlockTimeout:null | number = null;
  form : HTMLFormElement | null;

  constructor(el:string) {
    this.form = document.querySelector(el);
    this.addEvents();
    this.init();
  }
  get digits() {
    const selectors = this.form?.querySelectorAll("[name^=digit]");
    return selectors ? Array.from(selectors) : [] as  HTMLFormElement[];
  }
  get currentIndex() {
    return this.digits.findIndex(digit => digit === document.activeElement);
  }
  addEvents() {
    this.form?.addEventListener("click",this.enter.bind(this));
    this.form?.addEventListener("keydown",this.prevDigit.bind(this));
    this.form?.addEventListener("input",this.nextDigit.bind(this));
  }
  init() {
    if (this.form) {
      // clear the digits (if not already)
      this.form.reset();
      if (this.digits[0]) {
        // focus to first digit
        // @ts-ignore
        this.digits[0]?.focus();
      }

    }

  }
  enter = (e: MouseEvent) => {
  // enter(e:MouseEventInit) {

    if ((e.target as  HTMLFormElement)?.hasAttribute("data-enter") && !this.unlockTimeout) {
      // concatenate the digits…
      // @ts-ignore
      const inputDigits = this.digits.map(digit => digit.value).join("");
      // …and check them before unlocking
      if (inputDigits.length === 4 && +inputDigits === this.code) {
        this.unlock();
      } else {
        this.unlockDeny();
      }
    }
  }
  reset() {
    this.reverseCursor(true);
    if (this.form) {
      // remove all form modifier classes
      this.form.className = this.form.classList.item(0) ?? '';
    }
    // initiate the form again
    this.init();
    if (this.unlockTimeout) {
      // clean the timeout
      clearTimeout(this.unlockTimeout);
      this.unlockTimeout = null;
    }
  }
  reverseCursor(reverse = false) {
    const reverseClass = "passcode--reverse";

    if (reverse) this.form?.classList.add(reverseClass);
    else this.form?.classList.remove(reverseClass);
  }
  prevDigit = (e: MouseEventInit) =>{
    // @ts-ignore
    if (e.code === "Backspace" && !this.unlockTimeout) {
      this.reverseCursor(true);
      // @ts-ignore
      if (e.target.hasAttribute("data-enter")) {
        // clear and focus on the last digit
        const lastDigit = this.digits.at(-1);

        if (lastDigit) {
          // @ts-ignore
          lastDigit.value = "";
          // @ts-ignore
          lastDigit.focus();
        }
      } else {
        // @ts-ignore
        e.target.value = "";
        // find the previous digit input…
        const prevDigit = this.digits[this.currentIndex - 1];
        // …and move the focus it
        // @ts-ignore
        prevDigit?.focus();
      }
    }
  }
  nextDigit =(e:MouseEventInit) => {
    // @ts-ignore
    const value = parseInt(e.data);

    if (!isNaN(value) && value >= 0 && value <= 9 && !this.unlockTimeout) {
      this.reverseCursor();
      // find the next digit input…
      const nextDigit = this.digits[this.currentIndex + 1];
      // …and move the focus it (or the enter button if no more digits)
      if (nextDigit) {
        // @ts-ignore
        nextDigit.focus();
      } else {
        // @ts-ignore
        this.form?.querySelector("[data-enter]")?.focus();
      }
    } else {
      // @ts-ignore
      e.target.value = "";
    }
  }
  unlock() {
    this.form?.classList.add("passcode--granted");
    const passcodeWrapper = document.querySelector(".passcode-wrapper");
    if (passcodeWrapper) {
      passcodeWrapper.classList.add("hidden");
    }
    // this.unlockTimeout = setTimeout(() => {
    //   // allow the digits to already be gone when the form reenters
    //   this.form?.reset();
    //   this.unlockTimeout = setTimeout(this.reset.bind(this),750);
    // },500);
  }
  unlockDeny() {
    // const passcodeWrapper = document.querySelector(".passcode-wrapper");
    // if (passcodeWrapper) {
    //   passcodeWrapper.classList.add("hidden");
    // }
    this.form?.classList.add("passcode--denied");
    this.unlockTimeout = setTimeout(this.reset.bind(this),500);
  }
}