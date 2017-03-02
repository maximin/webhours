module.exports = function() {
    let data = { days: [] };
    const currDate = Math.floor(Date.now() / 1000);
    for (let i = 0; i < 31; i++) {
        data.days.push({ id: i, timestamp: currDate + 60 * 60 * 24 * i});
    }
    return data;
}
