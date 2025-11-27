<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Engineering</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/login.css">
</head>

<body>
    <!-- Back to Home Button -->
    <div class="back-home-btn">
        <a href="../../index.html">
            <i class="fas fa-arrow-left"></i> กลับหน้าหลัก
        </a>
    </div>

    <!-- Login Main Content -->
    <main class="login-wrapper">
        <div class="login-card">
            <div class="login-header">
                <h2>เข้าสู่ระบบ</h2>
                <p>Software Engineering LPRU</p>
            </div>

                <form class="login-form" action="login_db.php" method="post">

                    <?php if (isset($_GET['error'])) { ?>
                        <p class="error" style="color: red; text-align: center; margin-bottom: 10px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> <?php echo $_GET['error']; ?>
                        </p>
                    <?php } ?>

                    <div class="form-group">
                        <label for="username">รหัสประจำตัวนักศึกษา</label>
                        <input type="text" id="username" name="id_std" placeholder="กรอกรหัสประจำตัวนักศึกษาของคุณ" required>
                    </div>

                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input type="password" id="password" name="password" placeholder="กรอกรหัสผ่าน" required>
                    </div>

                    <button class="btn-login-submit" type="submit" name="login_user">
                        เข้าสู่ระบบ
                    </button>
                </form>

                <div class="credential-footer">
                    <p class="credential-title">
                        <i class="fa-solid fa-circle-info"></i> ตัวอย่างการเข้าสู่ระบบ
                    </p>
                    <div class="credential-list">
                        <p><i class="fa-solid fa-user-graduate"></i> รหัสประจำตัวนักศึกษา: <span>68xxxxxxxxx (11หลัก)</span></p>
                        <p><i class="fa-solid fa-key"></i> รหัสผ่าน: <span>วว/ดด/ปป/3ตัวท้ายหลังบัตรประชาชน</span></p>
                    </div>
                    <div class="warning">
                        <i class="fa-solid fa-triangle-exclamation"></i>หากไม่พบชื่อผู้ใช้หรือรหัสผ่าน
                        กรุณาติดต่ออาจารย์ผู้สอนหรือเจ้าหน้าที่ที่เกี่ยวข้อง
                    </div>
                </div>
        </div>
    </main>

    <!-- Footer Section -->
    <footer class="site-footer">
        <p>Copyright @2024 Project of Subject 5671206, Software Engineering, LPRU</p>
    </footer>

    <!-- JavaScript -->
    <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
    <script src="../../JS/script.js"></script>
</body>