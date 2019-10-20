import { useState, useEffect } from 'react'

const listeners = []
window.addEventListener('popstate', () => {
    for (const listener of listeners) listener(location.pathname)
})

const usePathname = () => {
    const [pathname, localSet] = useState(location.pathname)

    useEffect(() => {
        listeners.push(localSet)
    }, [])

    const goto = url => {
        history.pushState(null, '', url)
        for (const listener of listeners) listener(location.pathname)
    }

    return [pathname, goto]
}

export default usePathname
