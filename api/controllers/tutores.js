import { db } from "../db.js";

export const getTutores = (_, res) => {
  const q = "SELECT * FROM tutores";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addTutores = (req, res) => {
  const q = "INSERT INTO tutores(`nome`, `contato`, `endereco`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.contato,
    req.body.endereco,
  ];

  db.query(q [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tutor criado com sucesso.");
  });
};

export const updateTutores = (req, res) => {
  const q = "UPDATE tutores SET `nome` = ?, `contato` = ?, `endereco` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.contato,
    req.body.endereco,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tutor atualizado com sucesso.");
  });
};

export const deleteTutores = (req, res) => {
  const q = "DELETE FROM tutores WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Tutor deletado com sucesso.");
  });
};