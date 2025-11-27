document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. ฐานข้อมูลนักศึกษา ---
    const studentDatabase = {
        "1": {
            groupCode: "อยากนอน bruh",
            students: [
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Ms xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" }
            ]
        },
        "2": {
            groupCode: "จอมยุทธ์",
            students: [
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Ms xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Ms xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Ms xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" },
                { fullName: "Mr xxxxxx xxxxxx", nickname: "Nickname", id: "68xxxxxxxxx", img: "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" }
            ] 
        },
        // เพิ่มรุ่นอื่นๆ ได้ที่นี่
    };

    // --- 2. ตัวแปรสำหรับ Dropdown ใหม่ ---
    const customDropdown = document.getElementById('custom-dropdown');
    const dropdownSelected = document.getElementById('dropdown-selected');
    const dropdownOptions = document.getElementById('dropdown-options');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedText = dropdownSelected.querySelector('span');

    const groupBadge = document.getElementById('group-badge');
    const batchBadge = document.getElementById('batch-badge');
    const studentGrid = document.getElementById('student-grid');

    // --- 3. ฟังก์ชัน Render นักศึกษา (Logic เดิม) ---
    function renderStudents(batchYear) {
        batchBadge.textContent = `รุ่นที่ ${batchYear}`;
        const data = studentDatabase[batchYear];

        if (!data) {
            groupBadge.textContent = "-";
            studentGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888; padding: 20px;">ไม่พบข้อมูลรุ่นที่ ${batchYear}</div>`;
            return;
        }

        groupBadge.textContent = `นักศึกษารหัสกลุ่ม ${data.groupCode}`;
        
        let htmlContent = "";
        data.students.forEach(student => {
            htmlContent += `
                <div class="student-item">
                    <div class="img-frame">
                        <img src="${student.img}" alt="${student.fullName}" onerror="this.src='https://via.placeholder.com/200'">
                    </div>
                    <p class="st-name">${student.fullName} (${student.nickname})</p>
                    <p class="st-id">${student.id}</p>
                </div>
            `;
        });
        studentGrid.innerHTML = htmlContent;
    }

    // --- 4. Logic การทำงานของ Custom Dropdown ---

    // 4.1 เปิด/ปิด Dropdown เมื่อคลิกปุ่ม
    dropdownSelected.addEventListener('click', function(e) {
        e.stopPropagation(); // ป้องกัน Event ชนกัน
        customDropdown.classList.toggle('active');
        dropdownOptions.classList.toggle('open');
    });

    // 4.2 เมื่อเลือกรายการใน Dropdown
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            // เอา class active ออกจากทุกอันก่อน
            dropdownItems.forEach(i => i.classList.remove('active'));
            // ใส่ class active ให้ตัวที่เลือก
            this.classList.add('active');

            // เปลี่ยนข้อความที่หัว Dropdown
            const value = this.getAttribute('data-value');
            const text = this.innerText;
            selectedText.innerText = text;

            // เรียกฟังก์ชันแสดงข้อมูลนักศึกษา
            renderStudents(value);

            // ปิด Dropdown
            customDropdown.classList.remove('active');
            dropdownOptions.classList.remove('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (!customDropdown.contains(e.target)) {
            customDropdown.classList.remove('active');
            dropdownOptions.classList.remove('open');
        }
    });

    // เริ่มต้นทำงาน (โหลดรุ่น 1 เป็นค่าเริ่มต้น)
    renderStudents("1");
});