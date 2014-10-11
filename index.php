<?php

// starting the session
 session_start();

    $isValid = false; //Assume validation is bad

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $fax = $_POST['fax'];
    $message = $_POST['message'];
    $from = 'From: UntitledCompany';
    $to = 'jolangreen@hotmail.com';
    $subject = 'UntitledCompany Contact Form Submission';

    $body = "From: $name\n E-Mail: $email\n Phone: $phone\n Fax: $fax\n Message:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
            echo '<div class="pop-message success">Your message has been sent! <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></div>';
        } else {
            echo '<div class="pop-message fail">Something went wrong with your submission, please go back and try again! <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></div>';
        }
    }


if (isset($_POST['submit'])) {
    if(empty($name)) {
        echo '<p>Something went wrong, go back and try again!</p>';
    } else {
        $isValid = true;
    }
}
/*
if(!$isValid) {

}
*/

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>UntitledCompany</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=0">

    <link rel="stylesheet" href="assets/css/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/font-awesome.css" />
    <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
</head>

<body ng-app="myApp" ng-controller="BaseController" ng-class="pageClass('')">

<!-- Header
================================================== -->
<header>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-header">
                <h1><a href="index.html" class="logo"></a></h1>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse pull-right">
               <ul id="menu-header-menu" class="nav navbar-nav">
                    <li ng-class="menuClass('')"><a href="#/">Home</a></li>
                    <li ng-class="menuClass('about')"><a href="#/about">About</a></li>
                    <li ng-class="menuClass('services')"><a href="#/services">Services</a></li>
                    <li ng-class="menuClass('contact')"><a href="#/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<!-- Main Content
================================================== -->
<div ng-view id="main">
    <!-- Our views (pages) will be shown inside the ng-view tag -->
</div>
<div class="clear"></div>


<!-- Footer 
================================================== -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
            <div class="col-sm-6 social">
                <a href="#" class="block-icon"><i class="fa fa-facebook"></i></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-pinterest"></a>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-12 copyright">
                &copy; 2014 UntitledCompany. All Rights Reserved.
            </div>
        </div>
    </div>
</footer>


<!-- <script src="assets/js/scripts.min.js"></script> -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular-route.min.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/filters.js"></script>
    <script src="js/services.js"></script>
<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

</body>
</html>
