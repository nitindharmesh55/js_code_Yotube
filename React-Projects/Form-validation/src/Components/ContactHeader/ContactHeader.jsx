import React from 'react'
import styles from "./ContactHeader.module.css"

export const ContactHeader = () => {
  return (
    <div className={`
        container ${styles.contactSection}
    `}>
        <h1>Contact US</h1>
        <p>Need help? Our customer service team is ready to assist you with any questions or concerns. Contact us via email, phone, or the form below."</p>
    </div>
  )
}
