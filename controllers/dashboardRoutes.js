const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../config/middleware/isAuthenticated");

// Get user's dashboard with posts
router.get("/", withAuth, async (req, res) => {
  try {
    const userPostsData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    const posts = userPostsData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
