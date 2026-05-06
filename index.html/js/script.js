document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const dateFilter = document.getElementById("dataFilter");
  const cards = document.querySelectorAll(".event-card");

  function filterEvents() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedDate = dateFilter ? dateFilter.value : 'all';

    cards.forEach(card => {
      //    data attributes  
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const category = card.getAttribute("data-category") || "all";
      const date = card.getAttribute("data-date") || "all";

      // شروط البحث والفلترة
      const matchesSearch = title.includes(query);
      const matchesCategory = (selectedCategory === "all" || category === selectedCategory);
      const matchesDate = (selectedDate === "all" || date === selectedDate);

      // تحديد الحاوية (الأب) لإخفائها بالكامل
      const container = card.closest('[class*="col-"]') || card;

      if (matchesSearch && matchesCategory && matchesDate) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  // تشغيل الفلترة عند أي تغيير في المدخلات
  if (searchInput) searchInput.addEventListener("input", filterEvents);
  if (categoryFilter) categoryFilter.addEventListener("change", filterEvents);
  if (dateFilter) dateFilter.addEventListener("change", filterEvents);
});