import React from 'react'
const styles = require('./Modal.pcss')

const Modal = ({ children, show, close }) => {
    return (
        <div className={styles.modal} style={{ display: show ? 'block' : 'none' }}>
            <div className={styles.overlay} onClick={close}></div>
            <div className={styles.content}>
                {children}
                <button title="Close" className={styles.close} onClick={close}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default Modal
