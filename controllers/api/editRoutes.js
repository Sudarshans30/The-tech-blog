const { Post } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');



router.get(`/:id`, async (req, res) => {
  // find a single post by in your dashboard `id`
  
  try {
      const postData = await Post.findByPk(req.params.id);

      const singlePost = postData.get({ plain: true });
      res.render('edit', {
          ...singlePost,
      
          logged_in: req.session.logged_in
        });

      res.status(200)
  } catch (err) {
      res.status(500).json(err);
      console.log(err);
  }
});
// update post
router.put('/:id', async (req, res) => {
    // update a post by its `id` value
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (postData == 0) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        console.log(postData);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.delete('/:id', async (req, res) => {
    // delete one post by its `id` value
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No job found with that id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

