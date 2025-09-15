import dados from "../models/dados.js";

const { carros } = dados;

const getAllCarros = (req, res) => {
    res.status(200).json({
        total: carros.length,
        carros: carros
    });
}


    export { getAllCarros}