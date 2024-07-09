import { useEffect } from 'react'

const isMac = getPlatform().indexOf('MAC') >= 0

function getPlatform() {
    // Use feature detection approach to detect platform
    if ('platform' in navigator) return navigator.platform.toUpperCase()
    if ('userAgentData' in navigator && 'platform' in navigator.userAgentData) return navigator.userAgentData.platform.toUpperCase()
    return 'UNKNOWN'
}

const useSaveShorcut = (shortcutAction) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((isMac && event.metaKey && event.key === 's') || (!isMac && event.ctrlKey && event.key === 's')) {
                event.preventDefault()
                shortcutAction()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })
}

export default useSaveShorcut
