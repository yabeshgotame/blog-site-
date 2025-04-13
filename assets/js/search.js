// Client-side search (no backend needed)
document.getElementById('search-input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const results = document.getElementById('search-results');
  results.innerHTML = '';

  if (term.length < 2) return;

  // Search posts (Jekyll's native search)
  {% for post in site.posts %}
    if ("{{ post.title | downcase }}".includes(term) || 
        "{{ post.content | downcase }}".includes(term)) {
      results.innerHTML += `
        <a href="{{ post.url }}">{{ post.title }}</a>
      `;
    }
  {% endfor %}
});
