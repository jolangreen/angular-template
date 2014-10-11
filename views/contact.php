<section>
  <div class="container">
        <h1>Contact</h1>
        <div class="row">
            <div class="col-md-6">
                <form id="contactform" name="contactform" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" novalidate>
                    <div class="form-group">
                        <input type="text" id="name" name="name" ng-model="user.name" ng-minlength="3" required placeholder="Name">
                        <span ng-show="contactform.name.$dirty && contactform.name.$error.name">Enter a full name</span>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" ng-model="user.email" required  placeholder="Email">
                        <span ng-show="contactform.email.$error.email">Not an email</span>
                    </div>
                    <div class="form-group">
                        <input type="text" id="phone" name="phone" ng-model="user.phone" ng-pattern="/^[0-9.-]{7,14}$/" required placeholder="Phone">
                        <span ng-show="contactform.phone.$dirty && contactform.phone.$error.pattern">Enter a phone number</span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="fax" name="fax">
                    </div>
                    <div class="form-group">
                        <textarea name="" id="" placeholder="Message"></textarea>
                    </div>
                    <input id="submit" name="submit" type="submit" value="Submit" ng-disabled="contactform.$invalid" class="">
                </form>
            </div>
            <div class="col-md-6">
                <h3>Contact form</h3>
                <hr>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, dolor eligendi veniam illum facere molestiae cumque quia earum praesentium provident.</p>
                <p><span class="glyphicon glyphicon-inbox"></span> <a href="mailto:info@companyname.com">info@companyname.com</a></p>
                <p><span class="glyphicon glyphicon-phone-alt"></span> 416-555-5555</p>
                <p><span class="glyphicon glyphicon-home"></span> 767 Home Ave.<br>
                    Toronto, ON A1A 1A1</p>
                <div class="spacing-container">
                    <h4>Stay social</h4>
                    <hr>
                    <div class="row">
                        <div class="col-sm-12 social">
                            <a href="#" class="block-icon"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="block-icon"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="block-icon"><i class="fa fa-linkedin"></i></a>
                            <a href="#" class="block-icon"><i class="fa fa-pinterest"></i></a>
                        </div> <!-- end social-contact -->
                    </div>
                </div>
            </div>
        </div><!-- .row -->
    </div>
</section>

