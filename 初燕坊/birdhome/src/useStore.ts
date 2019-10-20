import { useState, useEffect } from 'react'

const createStore = <T>(initState: T) => {
    const listeners: Array<(fn: (prev: T) => T) => void> = []

    return () => {
        const [state, localSet] = useState(initState)
        useEffect(() => {
            listeners.push(localSet)
        }, [])

        const setState = state => {
            for (const listener of listeners) listener(state)
        }

        return [state, setState]
    }
}

export default createStore
