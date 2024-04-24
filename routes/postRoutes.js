const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Logic to create a new post
  const { title, content } = req.body;
  const newPost = {
    title,
    content,
    createdAt: new Date(),
  };
  // Save the new post to the database or perform any other necessary operations
  res.send("Post created");
});

router.get("/", (req, res) => {
  // Logic to retrieve posts
  // Fetch posts from the database or any other data source
  const posts = [
    { title: "Post 1", content: "Content 1" },
    { title: "Post 2", content: "Content 2" },
    { title: "Post 3", content: "Content 3" },
  ];
  res.send(posts);
});

router.put("/:postId", (req, res) => {
  // Logic to update a post by postId
  const { postId } = req.params;
  const { title, content } = req.body;
  // Update the post with the given postId in the database or any other data source
  res.send(`Post ${postId} updated`);
});

router.delete("/:postId", (req, res) => {
  // Logic to delete a post by postId
  const { postId } = req.params;
  // Delete the post with the given postId from the database or any other data source
  res.send(`Post ${postId} deleted`);
});

module.exports = router;
