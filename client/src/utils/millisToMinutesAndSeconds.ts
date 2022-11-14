export const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000)
    var seconds = (millis % 60000) / 1000
    return seconds == 60
        ? minutes + 1 + ':00'
        : minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
}
