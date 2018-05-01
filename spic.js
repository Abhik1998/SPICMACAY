// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("myBtn").style.display = "block";
    setTimeout(function () {document.getElementById("myBtn").style.display = "none";}, 5000);
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
} 


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(window).on('hashchange', function() {community();});
function community() {
    str=window.location.hash;
    if (str=="#home") {
        return home();
    }
    else if (str=="#about") {
        return about();
    }
    else if (str=="#activity") {
        return activity();
    }
    else if (str=="#gallery") {
        return gallery();
    }
    else if (str=="#gallery") {
        return gallery();
    }
    else if (str=="#team") {
        return team();
    }
    else if (str=="#wincon") {
        return wincon();
    }
    else if (str=="#wincon_img") {
        return winconimg();
    }
    else if (str=="#contacts") {
        return contacts();
    }
    else if (str=="#wall") {
        return wall();
    }
    else if (str=="#events") {
        return events();
    }
    else if (str=="#quiz") {
        return quiz();
    }
    else {
         $("#body_content").load("htm/home.htm");
    }
}
function home(){
     $("#body_content").load("htm/home.htm");
     window.location = '#home';
     document.getElementById('b_body').scrollIntoView();
}
function about(){
     $("#body_content").load("htm/about.htm");
     window.location = '#about';
     document.getElementById('b_body').scrollIntoView();
}
function activity(){
     $("#body_content").load("htm/activity.htm");
     window.location = '#activity';
     document.getElementById('b_body').scrollIntoView();
}
function gallery(){
     $("#body_content").load("htm/gallery.htm");
     window.location = '#gallery';
     document.getElementById('b_body').scrollIntoView();
}
function team(){
     $("#body_content").load("htm/team.htm");
     window.location = '#team';
     document.getElementById('b_body').scrollIntoView();
}
function wincon(){
     $("#body_content").load("htm/wincon.htm");
     window.location = '#wincon';
     document.getElementById('b_body').scrollIntoView();
}
function winconimg(){
     $("#body_content").load("htm/wincon_gallery.htm");
     window.location = '#wincon_img';
     document.getElementById('b_body').scrollIntoView();
}
function contacts(){
     $("#body_content").load("htm/contacts.htm");
     window.location = '#contacts';
     document.getElementById('b_body').scrollIntoView();
}
function wall(){
     $("#body_content").load("htm/wall_mag.htm");
     window.location = '#wall';
     document.getElementById('b_body').scrollIntoView();
}
function events(){
     $("#body_content").load("htm/events.htm");
     window.location = '#events';
     document.getElementById('b_body').scrollIntoView();
}
function quiz(){
     $("#body_content").load("htm/quiz.htm");
     window.location = '#quiz';
     document.getElementById('b_body').scrollIntoView();
}