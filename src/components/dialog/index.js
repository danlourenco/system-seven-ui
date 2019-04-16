import React from 'react'
import styles from './dialog.module.scss';
const Dialog = ({ content, isOpen, onConfirm }) => {

  return (
    <dialog open={ isOpen } className={ styles.dialog}>
      <div className={ styles.inner }>
        <div className={ styles.content }>
          <div> { content }</div>
        </div>
        <div className={ styles.actions }>
          <button className={ styles.primary}  onClick={ onConfirm }>OK</button>
        </div>
      </div>
    </dialog>
  )
}

export default Dialog;