const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/dbconfig', async (req, res) => {
    try{
        const dataDir = path.join(__dirname, '../data');

        fs.readdir(dataDir, (err, files) => {
            if (err) {
              res.status(500).json({ error: 'Error reading the data folder' });
              return;
            }
            const jsonFiles = files.filter(file => file.endsWith('.json'));
            res.json(jsonFiles);
        });
    }
    catch(err){
        console.log(err)
    }
})


router.get('/documents/:file', async (req, res) => {
    try{
        const { file } = req.params;
        const filePath = path.join(__dirname, '../data', file); 
      
        if (fs.existsSync(filePath)) {
          res.sendFile(filePath);
        } else {
          res.status(404).json({ error: 'File not found' });
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;