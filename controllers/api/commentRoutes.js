const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {

      if (req.session.logged_in){
      res.status(200).json(commentData);
      }

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports=router;