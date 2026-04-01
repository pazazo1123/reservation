function priceCalculate() {
  // ดึงจำนวนตั๋วและแปลงเป็นตัวเลข
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());
  
  // ดึง Dropdown ของ Event เพื่อเอาค่า value (1, 2, 3, 4)
  let selectObj = document.getElementById("event");
  let eventId = selectObj.options[selectObj.selectedIndex].value;
  
  let pricePerTicket = 0;

  // กำหนดราคาตามที่ระบุในหน้า HTML
  if (eventId === "1") {
    pricePerTicket = 91.25;  // Alicia Keys
  } else if (eventId === "2") {
    pricePerTicket = 79.88;  // Justin Bieber
  } else if (eventId === "3") {
    pricePerTicket = 83.12;  // Dua Lipa
  } else if (eventId === "4") {
    pricePerTicket = 100.00; // Lisa
  }

  // ส่งค่าราคารวมกลับไป
  return pricePerTicket * ticknum;
}

