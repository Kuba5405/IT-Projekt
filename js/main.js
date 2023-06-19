const InstagramPosts = async () => {
    const response = await fetch('https://www.instagram.com/kristian910o/#');
    const data = await response.json();
  
    const images = data.graphql.user.edge_owner_to_timeline_media.edges;
    images.forEach((post) => {
      const newPost = document.createElement('div');
      newPost.innerHTML = `
        <img src="${post.node.thumbnail_src}" alt="${post.node.accessibility_caption}">
      `;
      document.querySelector('.instagram-posts').appendChild(newPost);
    });
  };
  
  InstagramPosts();