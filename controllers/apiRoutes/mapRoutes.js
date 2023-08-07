const router = require('express').Router();
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const UserCreations = require('../../models/UserCreations');

// get user by id 
router.get('/:id', async (req, res) => {
    const userCreation = await UserCreations.findByPk(req.params.id);
    res.json(userCreation)
  });

  router.get('/:id/maps', async (req, res) => {
    try {
      const mapId = req.params.id;
      const userMaps = await UserCreations.findAll({ where: { mapId } });
      res.json(userMaps);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get user maps.' });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { map_name, user_name } = req.body;
      // Save the map to the database
      const newMap = await UserCreations.create({
        map_name,
        user_name,
      });
      res.json(newMap);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create a new map.' });
    }
  });

  router.put('/:userId/maps/:mapId', async (req, res) => {
    try {
      const {userId, mapId} = req.params;
      const {mapData} = req.body.mapData; 

      const map = await UserCreations.findByPk(mapId);
      if (!map || map.user_name !== userId) {
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
      await UserCreations.destroy({ where: { id: mapId, user_name: userId } });
      res.json({ message: 'Map deleted successfully.' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the map.' });
    }
  });
  
module.exports = router;