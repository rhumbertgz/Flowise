const isMac = getPlatform().indexOf('MAC') >= 0

function getPlatform() {
    // Use feature detection approach to detect platform
    if ('platform' in navigator) return navigator.platform.toUpperCase()
    if ('userAgentData' in navigator && 'platform' in navigator.userAgentData) return navigator.userAgentData.platform.toUpperCase()
    return 'UNKNOWN'
}

export { isMac, getPlatform }
