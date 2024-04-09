// Create new post public/js/new-post.js
const newYashyPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-yashy-post').value.trim();
    const content = document.querySelector('#content-new-yashy-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new post.'); // When unsuccessful, show alert
      }
    }
  };
  
  // Event listeners
  const newYashyPostForm = document.querySelector('.new-yashy-post-form');
  if (newYashyPostForm) {
    newYashyPostForm.addEventListener('submit', newYashyPostFormHandler);
  }