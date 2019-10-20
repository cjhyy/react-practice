import React from 'react'
import usePathname from './usePathname'
import Modal from './Modal'
import NewModal from './newModal'
import { useState } from 'react'
import Buttons from './button/mainButton'
import Tabs from './components/Tabs'
const App = () => {
    const [pathname, go] = usePathname()
    const [show, toggle] = useState(false)
    return (
        <div>
            <Modal show={show} close={() => toggle(false)}>
                <p>this is a modal</p>
            </Modal>
            <Buttons></Buttons>
            <Tabs active={1} arr={[1,2,3,7]} ></Tabs>
            <div>App ${location.pathname}</div>
            <button onClick={() => toggle(true)}>Click to open modal</button>
        </div>
    )
}

export default App
