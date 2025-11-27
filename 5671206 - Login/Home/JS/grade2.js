document.addEventListener("DOMContentLoaded", function() {
    
    // USER CONFIG
    
    // อยากเพิ่มปีไหน ใส่ Key ปีนั้นเข้าไป
    // อยากเพิ่มวิชา ใส่ Object เข้าไปใน Array
    const allGradeData = {
        "2568": {
            approvalDate: "รอการอนุมัติผล",
            subjects: [
                { code: "6666", name: "ฝึกลมปราณ", year: "2", teacher: "อ.ถังซาน", grade: "รอผล" }

            ]
        },
        "2567": {
            approvalDate: "อนุมัติผลเมื่อวันที่ 21 ตุลาคม 2567",
            subjects: [
                { code: "idk", name: "idk", year: "1", teacher: "idk", grade: "เกรด", link: "#" }
                
            ]
        },
        "2566": {
            approvalDate: "อนุมัติผลเมื่อวันที่ 18 ตุลาคม 2566",
            subjects: [
                { code: "1212", name: "sleep", year: "4", teacher: "Mr.IDK", grade: "เกรด", link: "#" }
            ]
        }
    };


    // LOGIC

    const yearDropdown = document.getElementById('year-dropdown');
    const yearSelected = document.getElementById('year-selected');
    const yearOptionsContainer = document.getElementById('year-options-container');
    const displayYear = document.getElementById('display-year');
    const approvalDateElement = document.getElementById('approval-date');
    const gradeTbody = document.getElementById('grade-tbody');

    // 1. ฟังก์ชันสร้าง Dropdown ปี อัตโนมัติจากข้อมูล
    function initYearDropdown() {
        yearOptionsContainer.innerHTML = ""; // เคลียร์ของเก่า
        const years = Object.keys(allGradeData).sort((a, b) => b - a); // เรียงปีจากมากไปน้อย

        years.forEach((year, index) => {
            const item = document.createElement('div');
            item.className = 'year-item';
            if (index === 0) item.classList.add('active'); // ให้ปีล่าสุด Active ก่อนเสมอ
            item.setAttribute('data-value', year);
            item.innerText = year;

            // เพิ่ม Event คลิกเลือกปี
            item.addEventListener('click', function() {
                // เปลี่ยน UI
                document.querySelectorAll('.year-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // โหลดข้อมูล
                loadGradeData(year);
                
                // ปิด Dropdown
                closeDropdown();
            });

            yearOptionsContainer.appendChild(item);
        });

        // โหลดข้อมูลปีล่าสุดเป็นค่าเริ่มต้น
        if (years.length > 0) {
            loadGradeData(years[0]);
        }
    }

    // 2. ฟังก์ชันโหลดตารางและข้อมูล
    function loadGradeData(year) {
        // อัปเดตหัวข้อและปุ่ม
        displayYear.innerText = year;
        yearSelected.querySelector('span').innerText = year;

        const data = allGradeData[year];

        // อัปเดตวันที่อนุมัติ
        approvalDateElement.innerText = data ? data.approvalDate : "-";

        // อัปเดตตาราง
        gradeTbody.innerHTML = ""; // ล้างตารางก่อน

        if (!data || !data.subjects || data.subjects.length === 0) {
            gradeTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 30px; color:#999;">ไม่มีข้อมูลรายวิชา</td></tr>`;
            return;
        }

        let html = "";
        data.subjects.forEach(sub => {
            
            // --- สร้างเงื่อนไขปุ่มตรงนี้ ---
            let buttonHTML = "";

            if (sub.grade === "รอผล") {
                // รอผล สร้างเป็น span ธรรมดา
                buttonHTML = `<span class="grade-waiting">${sub.grade}</span>`;
            } else {
                // เกรด สร้างเป็น a href  ดึงลิงก์จาก data
                buttonHTML = `<a href="${sub.link || '#'}" class="grade-link">${sub.grade}</a>`;
            }

            html += `
                <tr>
                    <td>${sub.code}</td>
                    <td class="text-left">${sub.name}</td>
                    <td>${sub.year}</td>
                    <td>${sub.teacher}</td>
                    <td>${buttonHTML}</td>  </tr>
            `;
        });
        gradeTbody.innerHTML = html;
    }

    // 3. จัดการเปิด-ปิด Dropdown
    function closeDropdown() {
        yearDropdown.classList.remove('active');
        yearOptionsContainer.classList.remove('open');
    }

    yearSelected.addEventListener('click', function(e) {
        e.stopPropagation();
        yearDropdown.classList.toggle('active');
        yearOptionsContainer.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
        if (!yearDropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // เริ่มทำงาน
    initYearDropdown();
});