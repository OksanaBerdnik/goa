<?php
    $to = 'tickets@avatarfest.com.ua';
    $subject = $_POST['subject'];
    $message = '
            <html>
                <head>
                    <title>Заявка / FK /'.$subject.'</title>
                </head>
                <body>
                    <p><b>Имя:</b> '.$_POST['name'].'</p>
                    <p><b>Страница в Facebook:</b> '.$_POST['facebook_profile'].'</p>
                    <p><b>Телефон:</b> '.$_POST['phone'].'</p>  
                    <p><b>Email:</b> '.$_POST['email'].'</p>
                    <p><b>Пакет:</b> '.$_POST['plan'].'</p>
                    <p><b>Перелет:</b> '.$_POST['flight_ticket'].'</p>                          
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    mail($to, $subject, $message, $headers);