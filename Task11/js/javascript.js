// Number count code statistic script
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// our portfolio section.
// Photo Filtering code script
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("colpicture");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("clicker");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Like click number count script
var clicks = 40;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    $('.like-counter').addClass("liked");
});

// Button scroll up fade
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

//Click event to scroll to top
$('#myBtn').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
//
$(document).ready(function () {
    $(document).mouseup(function(e)
    {
        var arr = [
            '#toggleContainer'
        ];
        ensureHideOnOutsideClick(arr, e);
    });
    $(document).find('button#toggle').on('click', function (e) {
        e.preventDefault();
        var elm = $(document).find('#toggleContainer');
        if (elm.hasClass('d-none')) {
            elm.removeClass('d-none');
        } else {
            elm.addClass('d-none');
        }
        return false;
    });
    /**
     * @param {array} arr
     * @param {object} event
     */
    function ensureHideOnOutsideClick(arr, event) {
        for (var i = 0; i < arr.length; i++) {
            var container = $(document).find(arr[i]);
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(event.target) && container.has(event.target).length === 0) {
                container.addClass('d-none');
            }
        }
    }
});

// Top bar click script.
$(document).ready(function(){
    $("#tophide").click(function(){
        $(".display_bar").toggle();
    });
});



