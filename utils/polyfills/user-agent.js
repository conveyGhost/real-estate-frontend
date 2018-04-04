import Sniffr from 'sniffr'

const s = new Sniffr()

if (typeof window !== 'undefined') s.sniff(window.navigator.userAgent)

export default s
