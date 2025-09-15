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

const updateCarro = (req, res ) => {
    const id = parseInt(req.params.id);
    const {nome, modelo, ano, cor, qtdeVitorias} = req.body;

    const idParaEditar = id;

    if(isNaN(idParaEditar)) {
        return res.status(400).json({
            success:false,
            message: "O ID deve ser um número valido"
        });
    }

    const carroExiste = carros.find((carro) => carro.id === idParaEditar);
    if(!carroExiste) {
        return res.status(404).json ({
            success: false,
            message: `O carro com o id ${idParaEditar} não foi encontrado`,
        });
    }

    const carrosAtualizados = carros.map((carro) => carro.id === idParaEditar ? {
        ...carro,
        ...(nome && {nome}),
        ...(modelo && {modelo}),
        ...(ano && {ano: parseInt (ano)}),
        ...(cor && {cor}),
        ...(qtdeVitorias && { qtdeVitorias: parseInt (qtdeVitorias)})
   }
   : carro
 );

 carros.splice(0, carros.length, ...carrosAtualizados);

 const carroEditado = carros.find((carro) => carro.id === idParaEditar);
 res.status(200).json({
    success: true,
    message: "Dados dos carros atualizados com sucesso",
    carro: carroEditado
 })

}




const deleteCarro = (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: `O ID deve ser valido`
        });
    }
    const carrosParaRemover = carros.find((carro) => carro.id === id);
    if (!carrosParaRemover) {
        return res.status(404).json({
            success: false,
            message: `O carro com ID ${id} não existe`
        });
    }
    const carrosFiltrados = carros.filter((carro) => carro.id !== id);

    carros.splice(0, carros.length, ... carrosFiltrados);

    res.status(200).json({
        success:true,
        message: `O carro ${id} foi removido de linha`
    })
}

export { getAllCarros, getCarrosByID, creatCarro, deleteCarro, updateCarro };
