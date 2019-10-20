import React from 'react'
const styles = require('./button.pcss')

const Buttons = () => {
    return (
        <div className={styles.buttonArea}>
             <button className={[styles.button,styles.add].join(' ')} >Add Resources</button>
             <button className={[styles.button,styles.cancel].join(' ')} >Cancel</button>
             <button className={[styles.button,styles.add].join(' ')} >Deny</button>

        </div>
    )
}

export default Buttons
