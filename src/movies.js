// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie)=>{
        return movie.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaStevenArr = moviesArray.filter((movie)=>{
        isDrama = movie.genre.includes('Drama')
        isSteven = movie.director === 'Steven Spielberg'
        return isDrama && isSteven;
    })
    return dramaStevenArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0)
    {
        return 0;
    }
    const allScores = [];
    moviesArray.map((movie)=>{
        if(!movie.score)
        {
            allScores.push(0);
        }
        else
        {
            allScores.push(movie.score);
        }
    })

    let total = 0;
    total = allScores.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue; 
    })
    return (Math.round(total/moviesArray.length *100)/100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter((movie)=>{
        return movie.genre.includes('Drama')
    })
    return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedArr= moviesArray.map((e) => e).sort((a, b) =>{
        if (a.year < b.year)
        {
            return (-1)
        }
        else if (a.year > b.year)
        {
            return (1);
        }
        else
        {
            if (a.title > b.title)
                return (1);
            if (a.title < b.title)
                return(-1);
            else
                return (0);
        }
    })
    return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) 
{
    const onlyTitles = [];
    moviesArray.map((movie)=> {
        onlyTitles.push(movie.title);
    })
    onlyTitles.sort()
    if(onlyTitles.length > 20)
        onlyTitles.splice(20);
    return onlyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copyArray = moviesArray.map((movie)=>movie);
    const arrayMinutes = copyArray.map((movie)=>{
        // let objNew = {}
        let minutes = 0;
        let arrayTime = [];
        arrayTime = movie.duration.split(' ');
        const indexOfHours = arrayTime[0].indexOf("h");
        const indexOfMinutes = arrayTime[1].indexOf("min");
        minutes = parseInt(arrayTime[0].slice(0,indexOfHours)) * 60
        minutes += parseInt(arrayTime[1].slice(0,indexOfMinutes));
        // objNew = movie
        movie.duration = minutes;
        console.log(movie)
        return movie;
    });
    console.log("This is the array: ",arrayMinutes);
    return arrayMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
