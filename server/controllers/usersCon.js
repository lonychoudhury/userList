import express from 'express';
import mongoose from 'mongoose';
import fastcsv from 'fast-csv';

import UserModel from '../models/userModel.js';

const router = express.Router();

exports.loadUsers = async (req, res) => {
    try {
      const {fetchedData} = await fetch("https://gorest.co.in/public-api/users");
      const loadData = fetchedData.data
      await UserModel.insertMany(loadData, { ordered: true });
      res.status(200).json({
        status: "Data Successfully Loaded",
      });
    } catch (err) {
      console.error(error);
    }
  };
  
export const getUsers = async (req, res) => { 
    try {
        const userModels = await UserModel.find();
        
        res.status(200).json(userModels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name,email,gender,status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user  with id: ${id}`);

    const updatedUser = { name,email,gender,status,_id: id };

    await UserModel.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const downloadCsv = async (req, res) => {
  try {
    const response = await UserModel.find();
    fastcsv
      .write(response, { headers: true })
      .on("finish", function () {
        console.log("Succesfully exported");
      })
      .pipe(ws);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

export default router;