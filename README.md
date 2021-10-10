Contact Form Using AJAX and PHP
============

This is very simple contact form using AJAX and PHP

This form will work for PHP 7 or higher

Installation
============

You have to clone this repository

```
git clone https://github.com/alltimehasan/contact-form-using-ajax-php.git
```

Usage
=====

You have to add your google reCaptcha V2 site key in the index.html file at line No. 20

```html

<div class="g-recaptcha" data-theme="light" data-sitekey="site_key"></div>

```

You have to add your google reCaptcha V2 secret key in the process/process-contact.php file at line No. 46

```php

$secret = 'secret_key';

```

You have to add a email address where the form data will go, in the process/process-contact.php file at line No. 72

```php

$recipient  = "youremail@domain.com";
```

You have to add your domain name in the process/process-contact.php file at line No. 86

```php

$headers .= 'From:Company Name <No-Reply@yourdomain.com>' . "\r\n";

```