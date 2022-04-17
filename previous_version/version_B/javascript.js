
// Close the splash screen completely and open the navigation and tab container
window.setTimeout("closeSplashScreen();", 2025);
function closeSplashScreen() {
    document.getElementById("splashScreen").style.display="none";
}

window.setTimeout("openNavigation();", 1925);     // Originally 1975
function openNavigation() {
    document.getElementById("navigation").style.display="flex";
}

window.setTimeout("openContainer();", 1925);     // Originally 1975
function openContainer() {
    document.getElementById("container").style.display="block";
}



// Change tabs
$(document).ready(function() {

    $(".tabsList li a").click(function(e) {
        e.preventDefault();
    });

    $(".tabsList li").click(function() {
        var tabid = $(this).find("a").attr("href");
        $(".tabsList li,body div.tab").removeClass("active");    // removing active class from tab
        $(".tab").hide();                                        // hiding open tab
        $(tabid).show();                                         // show tab
        $(this).addClass("active");                              // adding active class to clicked tab
        $("body, html, #container, .tab").scrollTop(0);          // scroll to the top on tab change
    });

});



// Résumé Modal JavaScript
var modal = document.getElementById("myModal");                         // Get the modal
var modalButtonHeader = document.getElementById("modalButtonHeader");   // Get the button that opens modal header
var modalButtonFooter = document.getElementById("modalButtonFooter");   // Get the button that opens modal footer
var modalSpan = document.getElementsByClassName("closeModal")[0];       // Get the <span> element that closes modal

// When the user clicks the button, open the modal
modalButtonHeader.onclick = function() {
    modal.style.display = "flex";
}
modalButtonFooter.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x) or outside the modal, close the modal
modalSpan.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Current job: Calculate years from becoming full-time on November 23, 2020
dateCurrentFullTime = new Date(2020, 10, 23) - (5 * 60 * 60 * 1000);    // The subtraction is to get UTC-5 for EST
dateDifference = Math.round((Date.now() - dateCurrentFullTime) / (1000 * 60 * 60 * 24 * 30.4375));    // 365.25 days / 12 months = 30.4375 days average
document.getElementById("numberOfMonthsCurrentJob").value = dateDifference;

// Resize the Months input box on Career tab calculated above to text size
$(function() {
    $("#hideNumMonthsCurrentJob").text($("#numberOfMonthsCurrentJob").val());
    $("#numberOfMonthsCurrentJob").width($("span").width());
}).on("input", function() {
    $("#hideNumMonthsCurrentJob").text($("#numberOfMonthsCurrentJob").val());
    $("#numberOfMonthsCurrentJob").width($("span").width());
});

// Calculate number of years worked
var numberOfYearsTotal = Math.floor((dateDifference + 59 + 37) / 12);
document.getElementById("numberOfYearsProfileTab").value = numberOfYearsTotal;
document.getElementById("numberOfYearsCareerTab").value = numberOfYearsTotal;

// Resize the Years input box on Profile tab calculated above to text size
$(function() {
    $("#hideNumYearsProfile").text($("#numberOfYearsProfileTab").val());
    $("#numberOfYearsProfileTab").width($("span").width());
}).on("input", function() {
    $("#hideNumYearsProfile").text($("#numberOfYearsProfileTab").val());
    $("#numberOfYearsProfileTab").width($("span").width());
});

// Resize the Years input box on Career tab calculated above to text size
$(function() {
    $("#hideNumYearsCareer").text($("#numberOfYearsCareerTab").val());
    $("#numberOfYearsCareerTab").width($("span").width());
}).on("input", function() {
    $("#hideNumYearsCareer").text($("#numberOfYearsCareerTab").val());
    $("#numberOfYearsCareerTab").width($("span").width());
});



// Browser tabs in Notes section functionality
function openBrowser(evt, browserName) {
    // Declare all variables
    var i, browserContent, browserLink;

    // Get all elements with class="browserContent" and hide them
    browserContent = document.getElementsByClassName("browserContent");
    for (i = 0; i < browserContent.length; i++) {
        browserContent[i].style.display = "none";
    }

    // Get all elements with class="browserLinks" and remove the class "active"
    browserLink = document.getElementsByClassName("browserLink");
    for (i = 0; i < browserLink.length; i++) {
        browserLink[i].className = browserLink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(browserName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("browserDefault").click();

// Show/Hide extra browser tabs
function browserShowHide() {
var browserShowHide = document.getElementById("browserShowHide");
    if (browserShowHide.style.display === "none") {
        browserShowHide.style.display = "block";
    }
    else {
        browserShowHide.style.display = "none";
    }
}
