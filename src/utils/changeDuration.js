export function changeDuration(duration, option) {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    if (hours !== 0)
        hours = (hours < 10) ? '0' + hours : hours;
    else
        hours = '0'
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    if (option === 'max') {
        return (hours === '0' ? '' : hours + ' giờ ') + minutes + ' phút ' + seconds + ' giây'
    }
    return (hours === '0' ? '' : hours + ':') + minutes + ':' + seconds
}