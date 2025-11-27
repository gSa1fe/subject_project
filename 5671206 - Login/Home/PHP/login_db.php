<?php 
session_start();
include('db_conn.php');

if (isset($_POST['login_user'])) {
    $id_std = mysqli_real_escape_string($conn, $_POST['id_std']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    if (empty($id_std)) {
        header("Location: login.php?error=กรุณากรอกรหัสนักศึกษา");
        exit();
    } else if (empty($password)) {
        header("Location: login.php?error=กรุณากรอกรหัสผ่าน");
        exit();
    } else {
        // เช็คข้อมูลในตาราง users
        $sql = "SELECT * FROM std_user WHERE id_std = '$id_std' AND password = '$password'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            $_SESSION['id_std'] = $row['id_std'];
            
            // ล็อกอินสำเร็จ -> ไปหน้า Index
            header("Location: ../../index.html"); 
            exit();
        } else {
            header("Location: login.php?error=รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง");
            exit();
        }
    }
} else {
    header("Location: login.php");
    exit();
}
?>