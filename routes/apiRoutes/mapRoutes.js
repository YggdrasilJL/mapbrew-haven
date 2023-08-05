const router = require('express').Router();
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const UserCreations = require('../../models/UserCreations');

// get user by id 
router.get('/:id', async (req, res) => {
    const user = await UserCreations.findByPk(req.params.id);
    res.json(user)
  });

  router.post('/', async (req, res) => {
    try {
      const { userId, mapData } = req.body; // Assuming you receive userId and mapData in the request body
      // Save the map to the database
      const newMap = await UserCreations.create({
        userId,
        mapData,
      });
      res.json(newMap);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create a new map.' });
    }
  });

  router.get('/:userId/maps', async (req, res) => {
    try {
      const userId = req.params.userId;
      const userMaps = await UserCreations.findAll({ where: { userId } });
      res.json(userMaps);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get user maps.' });
    }
  });

  router.put('/:userId/maps/:mapId', async (req, res) => {
    try {
      const { userId, mapId } = req.params;
      const mapData = req.body.mapData; 

      const map = await UserCreations.findByPk(mapId);
      if (!map || map.user.Id !== userId) {
        return res.status(404).json({error: 'Map not found.'});
      }
      map.mapData = mapData;
      await map.save();

      res.json(map);
  } catch (err) {
    res.status(500).json({error: 'Failed to update the map.'});
  }
});
  
  router.delete('/:userId/maps/:mapId', async (req, res) => {
    try {
      const { userId, mapId } = req.params;
      // Find the map and delete it
      await UserCreations.destroy({ where: { userId, id: mapId } });
      res.json({ message: 'Map deleted successfully.' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the map.' });
    }
  });
  




module.exports = router;
