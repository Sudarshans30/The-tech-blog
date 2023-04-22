
const {Post,User } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    // find user's posts
    try {
      const postData = await Post.findAll(
        {
            include:{model:User},
        where: { user_id: req.session.user_id },

        },
    
      );
 
      const myPosts = postData.map((post) => post.get({ plain: true }));
      res.render('dashboard', { myPosts, logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


router.get('/newpost', (req, res) => {
  
    
    if (!req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('newpost',{logged_in: req.session.logged_in} );
    });


module.exports = router;