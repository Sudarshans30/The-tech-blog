const { Post } = require('../../models');
const { User } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');



router.get(`/:id`, async (req, res) => {
  // find a single post by `id`
  
  try {
      const postData = await Post.findByPk(req.params.id,

        {
          include: [{ model: User}]
        }  
               
        );   

      const singlePost = postData.get({ plain: true });
      res.render('post', {
          ...singlePost,
         
          logged_in: req.session.logged_in
        });
      

        res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
      console.log(err);
  }
});

 
router.post('/', async (req, res) => {
    
 
    try {
      const postData = await Post.create({         
        content: req.body.content,
        title: req.body.title,
        user_id: req.session.user_id });
      
       res.status(200).json(postData);
      res.render('dashboard');
   
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;