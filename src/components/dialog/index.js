import React from 'react'
import styles from './dialog.module.scss';
import icon from './icon.png';
const Dialog = ({ content, showWelcome, onConfirm }) => {

  return (
    <dialog open={ showWelcome } className={ styles.dialog}>
      <div className={ styles.inner }>
        <div className={ styles.content }>
          <img src={ icon } alt={ 'Bitmap icon of developer' } />
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