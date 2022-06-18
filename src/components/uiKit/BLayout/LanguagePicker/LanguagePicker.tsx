import './styles.css';
import React from 'react'
/* @ts-ignore */
/* eslint-disable */

interface LangPickerState {
   isOpen: boolean;
   haveText: string;
}

type iProps = any;

const race = ['EN', 'CN'];
class LanguagePicker extends React.Component<iProps, LangPickerState> {

   constructor(props) {
      super(props)

      this.state = {
         isOpen: false,
         haveText: ""
      }
   }

   render() {
      const { isOpen, haveText } = this.state;

      return (
         <div
            className={isOpen ? "dropdown active" : "dropdown"}
            onClick={this.handleClick} >
            <div className="dropdown__text">
               <img className="dropdown__language__icon" src='/images/menuIcons/icon-language.svg' alt='' />
               {!haveText ? "EN" : haveText}
            </div>
            {this.itemList(race)}
         </div>
      )
   }

   handleClick = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   handleText = (ev) => {
      this.setState({
         haveText: ev.currentTarget.textContent
      })
   }

   itemList = props => {
      const list = props.map((item) => (
         <div
            onClick={this.handleText}
            className="dropdown__item"
            key={item.toString()}>
            {item}
         </div>
      ));

      return (
         <div className="dropdown__items"> {list} </div>
      )
   }

}

export default LanguagePicker;

/* @ts-ignore */
/* eslint-disable */
