//Calendario
function window_onload(){
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //Fecha
    //Date
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var monthNumber = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var dates = document.getElementById('dates');
    var month = document.getElementById('month');
    var year = document.getElementById('year');

    var prevMonthDOM = document.getElementById('prev-month');
    var nextMonthDOM = document.getElementById('next-month');
    //Pinta mes en html
    //Paint month in html
    console.log("waka");
    //month.innerHTML =monthNames[monthNumber];
    month.textContent =monthNames[monthNumber];
    console.log("mole");
    year.textContent = currentYear.toString();

    //seleccion de mes (anterior-siguiente)
    //month selection (previous-next)
    prevMonthDOM.addEventListener('click', function () {
        return lastMonth();
    });
    nextMonthDOM.addEventListener('click', function () {
        return nextMonth();
    });

    writeMonth(monthNumber);
    //escribe mes con sus dias 
    //write month with your days 
    function writeMonth(month) {

        for (var i = startDay(); i > 0; i--) {
            dates.innerHTML += ' <div class="calendar__date calendar__item calendar__last-days">\n        ' + (getTotalDays(monthNumber - 1) - (i - 1)) + '\n</div>';
        }

        for (var _i = 1; _i <= getTotalDays(month); _i++) {
            if (_i === currentDay) {
                dates.innerHTML += ' <div class="calendar__date calendar__item calendar__today">' + _i + '</div>';
            } else {
                dates.innerHTML += ' <div class="calendar__date calendar__item">' + _i + '</div>';
            }
        }
    }
    //Saber cuantos días tiene el mes 
    //Know how many days a month has 
    function getTotalDays(month) {
        if (month === -1) month = 11;

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return 31;
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;
        } else {

            return isLeap() ? 29 : 28;
        }
    }
    //Bisiesto
    //leap
    function isLeap() {
        return currentYear % 100 !== 0 && currentYear % 4 === 0 || currentYear % 400 === 0;
    }

    function startDay() {
        var start = new Date(currentYear, monthNumber, 1);
        return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
    }

    function lastMonth() {
        if (monthNumber !== 0) {
            monthNumber--;
        } else {
            monthNumber = 11;
            currentYear--;
        }

        setNewDate();
    }

    function nextMonth() {
        if (monthNumber !== 11) {
            monthNumber++;
        } else {
            monthNumber = 0;
            currentYear++;
        }

        setNewDate();
    }

    function setNewDate() {
        currentDate.setFullYear(currentYear, monthNumber, currentDay);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        dates.textContent = '';
        writeMonth(monthNumber);
    }


}
//eliminar mensaje
//delete message
function eliminar(id,id1) {
    document.getElementById(id).remove();
    document.getElementById(id1).remove();
}
//desplegable
//pull-down menu
function mostrar(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("botonP").style.transform="rotate(0deg)";
    } else {
        x.style.display = 'none';
        document.getElementById("botonP").style.transform="rotate(270deg)";
    }
}