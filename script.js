function showSection(sectionId) {
    // Hide all sections
    document.getElementById('all-courses').style.display = 'none';
    document.getElementById('learning-paths').style.display = 'none';
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  
    // Update active tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
  }
  
  