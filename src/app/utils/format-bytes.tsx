export function formatBytes(bytes: number) {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  let value = bytes
  let unitIndex = 0

  while (value > 1024 && unitIndex < units.length - 1) {
    value = value / 1024
    unitIndex++
  }

  return `${value.toFixed(1)} ${units[unitIndex]}`
}
