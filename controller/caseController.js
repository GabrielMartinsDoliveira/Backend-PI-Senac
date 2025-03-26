import { Case } from "../models/case";

export const createCase = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    const newCase = new Case({ titulo, descricao, status });
    await newCase.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Possibilidade de criar outras funções para pesquisar utilizando filtros ou tratar no frontend
export const getCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Atualizar o status do caso, considerando que ao mudar o status para finalizado ele irá receber a data/hora da atualização
// Possibilidade: o usuário passar a data do fechamento - questionar o modelo de negócio
export const updateStatusCase = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { status } = req.body;
    if (status == "finalizado") {
      const dataFechamento = Date.now;
      const updatedCase = await Case.findByIdAndUpdate(
        id,
        {
          status,
          dataFechamento,
        },
        { new: true }
      );
      if (!updatedCase) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(updatedCase);
    } else {
      const updatedCase = await Case.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updatedCase) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(updatedCase);
    }
  } catch (err) {}
};
