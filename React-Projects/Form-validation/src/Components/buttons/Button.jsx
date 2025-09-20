import React from 'react'
import styles from "./Button.module.css";


const Button = ({isOutline, text, icon, ...rest}) => {

    // const {isOutline, text, icon, ...reset} = props;
  return (
    <button    {...rest}  className={ isOutline ? styles.OutLineBtn : styles.primaryBtn}>
      {icon} {text}
    </button>
  )
}

export default Button