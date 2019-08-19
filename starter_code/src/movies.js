/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    //return parseFloat(movies) * 2.0 * Math.PI;
    let total = 0;
    for (var i = 0; i < movies.length; i++) {
        total += parseFloat(movies[i].rate);

    }
    var avg = total / movies.length;
    return parseFloat(avg.toFixed(2));
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const filteredArray = movies.filter(function (movie) {
        return movie.genre.includes("Drama")
    });
    let total = 0;
    for (let i = 0; i < filteredArray.length; i++) {
        if (filteredArray[i].rate)
            total += parseFloat(filteredArray[i].rate);

    }
    if (filteredArray.length === 0)
        return 0;
    let avg = total / filteredArray.length;
    return parseFloat(avg.toFixed(2));

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
/*function orderByDuration(movies) {
    const time = movies.sort(function (a, b) {
        return movie.duration;
    });
    return a - b;
}*/





// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const stevenMovies = movies.filter(function (stevenMovie) {

        if (stevenMovie.director === "Steven Spielberg" && stevenMovie.genre === "Drama");

        return stevenMovies;
    });
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    return arr.map(function (movie) {
        return movie.title;
    }).sort().slice(0, 20);
} // this works
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function (film) {
        var newEl = Object.assign({}, film)
        var splitTime = newEl.duration.split(' ');

        if (splitTime.length === 2) {
            var timeTotal = parseFloat(splitTime[0]) * 60 + parseFloat(splitTime[1]);
            newEl.duration = timeTotal
        } else if (splitTime.length === 1 && splitTime[0].indexOf('h') > -1) {
            var timeHours = newEl.duration.replace('h', '');
            var timeHoursTotal = parseFloat(timeHours * 60);
            newEl.duration = timeHoursTotal
        } else if (splitTime.length === 1 && splitTime[0].indexOf('min') > -1) {
            var timeMinutes = newEl.duration.replace('min', '');
            var timeMinutesTotal = parseFloat(timeMinutes);
            newEl.duration = timeMinutesTotal
        }

        return newEl;
    });
}

turnHoursToMinutes(movies);
// BONUS Iteration: Best yearly rate average - Best yearly rate average