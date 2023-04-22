const router = require('express').Router();


const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const dashboardRoutes = require('./dashboardRoutes')
const commentRoutes = require('./commentRoutes')
const editRoutes = require('./editRoutes')





router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/edit', editRoutes);

module.exports = router;