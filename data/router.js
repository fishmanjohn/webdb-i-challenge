const express = require('express');
const Db = require('./helpers/accountsModel')
const router = express.Router();

//create
router.post('/', (req,res)=>{
    Db.insert(req.body)
    .then(acct=>{
        console.log(acct)
        res.status(200).json(acct)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "There was an error while saving the account to the database"})
    })
});

//read
router.get('/', (req,res)=>{
    Db.get()
    .then(accts=>{
        console.log(accts)
        res.status(200).json(accts)})
        .catch(err=>{console.log(err)
          res.status(500).json({error: "There was an error while saving the account to the database"})
          })
    });

//update
router.put('/:id',(req,res)=>{
    const id = req.params.id
     const changes= req.body
     console.log(`8===D ${changes}`)
     Db.update(id, changes)
           .then(acct => {
                 console.log(acct)
               res.status(200).json(acct) 
           })
           .catch(err => {
               res.status(500).json({ error: "The account information could not be modified.", error: err })
           })
 });
//delete
 router.delete('/:id',(req,res)=>{
    id = req.params.id
    Db.remove(id)
    .then(count => {
        if (count > 0) {
          res.status(200).json({ message: 'The account has been removed' });
        } else {
          res.status(404).json({ message: 'The account could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error removing the account',
        });
      });
    
    });
    module.exports = router