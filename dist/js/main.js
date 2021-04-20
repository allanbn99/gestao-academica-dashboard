/**
 * SIDEBAR
 */

//Collapse Sidebar Function
$("#sty-sidebar-toggle").click(function(e) {
    e.preventDefault();
    $("#sty-sidebar-toggle").toggleClass("menuDisplayed");
    $("#sty-wrapper").toggleClass("menuDisplayed");
});