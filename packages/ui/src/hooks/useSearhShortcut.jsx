import { useEffect } from 'react'
import { isMac, isDesktop } from '@/utils/genericHelper'

const useSearchShorcut = (inputRef) => {
    useEffect(() => {
        const component = inputRef.current
        const handleKeyDown = (event) => {
            if ((isMac && event.metaKey && event.key === 'k') || (!isMac && event.ctrlKey && event.key === 'k')) {
                event.preventDefault()
                component.focus()
            }
        }

        const handleInputEscape = (event) => {
            if (event.key === 'Escape') component.blur()
        }

        if (component && isDesktop) {
            inputRef.current.addEventListener('keydown', handleInputEscape)
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            if (component && isDesktop) {
                component.addEventListener('keydown', handleInputEscape)
                document.removeEventListener('keydown', handleKeyDown)
            }
        }
    })
}

export default useSearchShorcut
