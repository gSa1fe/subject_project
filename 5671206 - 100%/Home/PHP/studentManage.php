<?php
session_start();
if (!isset($_SESSION['id_std'])) {
    header("Location: login.php?error=กรุณาเข้าสู่ระบบก่อนใช้งาน");
    exit();
}
?>

<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Engineering</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/announcement.css">
</head>

<body>

        <!-- Navbar -->
    <header class="site-header">
        <div class="header-content">
            <div class="header-text">
                <h1>Software Engineering</h1>
                <p>Lampang Rajabhat University</p>
            </div>
            <div class="header-logo">
                SE <span>LPRU</span>
            </div>
        </div>

        <nav class="navbar">
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-menu">
                <li class="dropdown">
                    <a href="../../index.php" class="dropbtn">
                        <i class="fas fa-home"></i> หน้าหลัก <i class="fa-solid fa-angle-right"
                            style="font-size: 12px; margin-left: 5px;"></i>
                    </a>
                    <div class="dropdown-content">
                        <a class="drop" href="../../index.php">หน้าหลัก</a>
                        <a class="drop" href="../HTML/components_pages/prize.html">ผลงานเผยแพร่</a>
                        <a class="drop" href="../HTML/components_pages/index.html">ข้อมูลหลักสูตร</a>
                        <a class="drop" href="https://classroom.google.com/c/MzE3MTI3NzY3MTk3?cjc=z454fhk" target="_blank">งานประกันคุณภาพ</a>
                        <a class="drop" href="https://www.softengthai.com/Document/SE_Project.pdf" target="_blank">เอกสารโครงงาน</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="../../HTML/main_pages/grade-1.php" class="dropbtn">
                        <i class="fas fa-graduation-cap"></i> ผลการเรียน <i class="fa-solid fa-angle-right"
                            style="font-size: 12px; margin-left: 5px;"></i>
                    </a>
                    <div class="dropdown-content">
                        <a class="drop" href="../HTML/main_pages/grade-1.php">ภาคเรียนที่ 1</a>
                        <a class="drop" href="../HTML/main_pages/grade-2.php">ภาคเรียนที่ 2</a>
                    </div>
                </li>
                <li>
                    <a href="../PHP/student.php">
                        <i class="fas fa-id-card"></i> ทะเบียนนักศึกษา
                    </a>
                </li>
                <li>
                    <a href="../PHP/studentManage.php">
                        <i class="fas fa-user"></i> ข้อมูลนักศึกษา
                    </a>
                </li>
                <li>
                    <a href="../HTML/main_pages/alumni.php">
                        <i class="fas fa-user-graduate"></i> ทำเนียบนักศึกษา
                    </a>
                </li>
                <li>
                    <a href="../HTML/main_pages/resume.php">
                        <i class="fas fa-file-alt"></i> Resume
                    </a>
                </li>
            </ul>
            <?php if (isset($_SESSION['id_std'])) { ?>
                <button class="login-btn" style="background: linear-gradient(180deg, #ff6b6b 0%, #ee5253 100%);">
                    <a href="logout.php" onclick="return confirm('ต้องการออกจากระบบใช่หรือไม่?');">ออกจากระบบ</a>
                </button>
            <?php } else { ?>
                <button class="login-btn">
                    <a href="login.php">เข้าสู่ระบบ</a>
                </button>
            <?php } ?>
        </nav>
    </header>

        



    <!-- Footer Section -->
    <footer class="site-footer">
        <p>Copyright @2024 Project of Subject 5671206, Software Engineering, LPRU</p>
    </footer>




    <!-- JavaScript -->
    <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
    <script src="../../JS/script.js"></script>
</body>

</html>