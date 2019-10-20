import React from 'react'
const styles = require('./Tabs.pcss')

const Tabs = ({active,arr }) => {
    var str = arr.map((item, index) => {
        return  <li className={ active === index?[styles.TabsItem,styles.select].join(' '):styles.TabsItem } onClick={()=>{active = index}} key={index} >{item}</li>
    })
    return (
        <div className={styles.TabsArea}>
            <ul className={styles.TabsMain} >
               {str}
            </ul>
        </div>
    )
}

export default Tabs
