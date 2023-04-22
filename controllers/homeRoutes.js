const { Post, User, Comment } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/',  async (req, res) => {
    // find all existing posts  
    try {
        const postData = await Post.findAll(
            {
                include: [{ model: User }],
            }


        );
        const existingPost = postData.map((post) => post.get({ plain: true }));
        res.render('homepage',{existingPost, logged_in: req.session.logged_in });
      
    } 
    catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});


// Use withAuth middleware to prevent access to route
router.get('/dashboard',withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('api/dashboard');
    return;
  }

  res.render('login');
});

router.get('/sign-up', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('sign-up');
});


router.get('/posts/:id',async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
       
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
   
    // const comments = commentData.map((post) => post.get({ plain: true }));

    const singlePost = postData.get({ plain: true });
    res.render('post', {
        ...singlePost,
        // comments,
         
        logged_in: req.session.logged_in
      });
      
      // res.status(200).json(postData);
} catch (err) {
  console.log(err);
    res.status(500).json(err);
    
}
});

module.exports = router;