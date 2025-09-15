import dados from "../models/dados.js";

const { carros } = dados;

const getAllCarros = (req, res) => {
    res.status(200).json({
        total: carros.length,
        carros: carros
    });
}

    const getCarrosByID = (req, res) => {
        const id = parseInt(req.params.id);

        const carro = carros.find((carro) => carro.id === id);

        res.status(200).json({
            total: carro.length,
            carro: carro
        });
    }

    export { getAllCarros, getCarrosByID}