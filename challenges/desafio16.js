db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $currentDate: {
    ultimaModificacao: { $type: "timestamp" },
  } },
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });