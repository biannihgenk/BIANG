document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diary-form');
    const entriesList = document.getElementById('entries-list');
    const calendar = document.getElementById('calendar');
    
    // Fungsi untuk menambahkan entri ke dalam daftar
    function addEntryToDiary(title, date, text) {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('diary-entry-card');
      
      entryDiv.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Tanggal:</strong> ${date}</p>
        <p>${text}</p>
      `;
      
      entriesList.appendChild(entryDiv);
    }
    
    // Fungsi untuk menangani form submit
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const title = document.getElementById('entry-title').value;
      const date = document.getElementById('entry-date').value;
      const text = document.getElementById('entry-text').value;
      
      // Menambahkan entri baru ke dalam daftar
      addEntryToDiary(title, date, text);
      
      // Reset form setelah entri ditambahkan
      form.reset();
    });
    
    // Fungsi untuk menampilkan kalender bulan ini
    function displayCalendar() {
      const now = new Date();
      const month = now.getMonth(); // Bulan 0-11
      const year = now.getFullYear();
      
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      
      let daysInMonth = lastDayOfMonth.getDate();
      let firstDay = firstDayOfMonth.getDay();
      
      let calendarHTML = '<h3>' + now.toLocaleString('id-ID', { month: 'long', year: 'numeric' }) + '</h3>';
      calendarHTML += '<div class="calendar-grid">';
      
      // Menambahkan nama hari
      const daysOfWeek = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
      for (let i = 0; i < daysOfWeek.length; i++) {
        calendarHTML += `<div class="calendar-day header">${daysOfWeek[i]}</div>`;
      }
      
      // Menambahkan hari-hari dalam bulan
      for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div class="calendar-day empty"></div>';
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        calendarHTML += `<div class="calendar-day">${day}</div>`;
      }
      
      calendarHTML += '</div>';
      
      calendar.innerHTML = calendarHTML;
    }
  
    // Menampilkan kalender saat halaman dimuat
    displayCalendar();
  });
  