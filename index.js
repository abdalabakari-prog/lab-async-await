// index.js

// Function to display posts
function displayPosts(posts) {
  // Get the ul element
  const postList = document.getElementById('post-list');
  
  // Clear any existing content (like loading message)
  postList.innerHTML = '';
  
  // Loop through the posts
  posts.forEach(post => {
    // Create an li element
    const li = document.createElement('li');
    
    // Create an h1 element
    const h1 = document.createElement('h1');
    // Set textContent to the title of the post
    h1.textContent = post.title;
    
    // Create a p element
    const p = document.createElement('p');
    // Set textContent to the body of the post
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    // Fetch data from the API using await
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Parse the JSON data using await
    const posts = await response.json();
    
    // Call displayPosts with the fetched data
    displayPosts(posts);
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    // Display error message to user
    const postList = document.getElementById('post-list');
    postList.innerHTML = '<li style="color: red;">Error loading posts. Please try again later.</li>';
  }
}

// Call the fetchPosts function when the page loads
fetchPosts();
