/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return a new array that transforms the element's average altitude into their
 * orbital periods.
 *
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 *
 * You can read about orbital periods on wikipedia.
 *
 * The values should be rounded to the nearest whole number. The body being orbited *
 * is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
 * 398600.4418 km3s-2.
 *
 * -------------------------
 * @param {array} arr
 * @return {array}
 *
 */
function orbitalPeriod(arr) {
    let earthsGM = 398600.4418,
        earthRadius = 6367.4447,
        results = [];

    let getOrbPeriod = function(data) {
        let orbPeriod = Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + data.avgAlt, 3)) / earthsGM));
        delete data.avgAlt;

        data.orbitalPeriod = orbPeriod;
        return data;
    };

    for (let element in arr) {
        results.push(getOrbPeriod(arr[element]));
    }

    return results;
}
