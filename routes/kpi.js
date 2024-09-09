import express from "express";
import KPI_Model from "../models/KPI_Model.js";

const router = express.Router();

router.get("/kpis", async(req, res) => {
 try {
    const kpis = await KPI_Model.find();
    res.status(200).json(kpis);
 } catch (error) {
    res.status(404).json({message: error.message});
 }
});
export default router;

