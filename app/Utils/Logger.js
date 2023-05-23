function log(type, content) {
    // eslint-disable-next-line no-console
    console[type](`[${type}] :: ${new Date().toLocaleTimeString()} :: `, ...content)

}

export const logger = {
  log() {
    log('log', arguments)
  },
  error() {
    log('error', arguments)
  },
  warn() {
    log('warn', arguments)
  },
  assert() {
    log('assert', arguments)
  },
  trace() {
    log('trace', arguments)
  }
}
