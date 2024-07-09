import { useEffect } from 'react'
import { isMac } from '@/utils/platformHelper'

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
