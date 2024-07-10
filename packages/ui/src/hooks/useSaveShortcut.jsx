import { useEffect } from 'react'
import { isMac, isDesktop } from '@/utils/genericHelper'

const useSaveShorcut = (shortcutAction) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((isMac && event.metaKey && event.key === 's') || (!isMac && event.ctrlKey && event.key === 's')) {
                event.preventDefault()
                shortcutAction()
            }
        }

        if (isDesktop) document.addEventListener('keydown', handleKeyDown)

        return () => {
            if (isDesktop) document.removeEventListener('keydown', handleKeyDown)
        }
    })
}

export default useSaveShorcut
