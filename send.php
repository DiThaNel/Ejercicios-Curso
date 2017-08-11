
if (!empty($_POST)) {
    $email = $_POST['signup-email'];

    Newsletter::register($email);
}