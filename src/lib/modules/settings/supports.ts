export default {
  isAndroid: typeof navigator !== 'undefined' && navigator.userAgent.includes('Android'),
  isAndroidTV: typeof navigator !== 'undefined' && navigator.userAgent.includes('AndroidTV'),
  // @ts-expect-error yeah
  // 32 bit, <4GB of RAM, or any Android TV
  isUnderPowered: typeof navigator !== 'undefined' && (navigator.platform === 'Linux armv8l' || navigator.deviceMemory < 4 || navigator.userAgent.includes('AndroidTV'))
}
