import dados from "../models/dados.js";

const { carros } = dados;

const getAllCarros = (req, res) => {
  res.status(200).json({
    total: carros.length,
    carros: carros,
  });
};

const getCarrosByID = (req, res) => {
  const id = parseInt(req.params.id);

  const carro = carros.find((carro) => carro.id === id);

  res.status(200).json({
    total: carro.length,
    carro: carro,
  });
};

const creatCarro = (req, res) => {
  const { nome, modelo, ano, cor, qtdeVitorias } = req.body;

  if (!modelo || !ano) {
    return res.status(400).json({
      success: false,
      message:
        "Modelo e ano de fabricação são necessários para a criação de um carro",
    });
  }
  const novoCarro = {
    id: carros.length + 1,
    nome: nome,
    modelo: modelo,
    ano: ano,
    cor: cor || "Precisa de uma renovação na pintura",
    qtdeVitorias: qtdeVitorias,
  };
  carros.push(novoCarro);

  res.status(200).json({
    success: true,
    message: "Novo carro adicionado com sucesso",
    carro: novoCarro,
  });
};

export { getAllCarros, getCarrosByID, creatCarro };
