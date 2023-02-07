db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { $and: [
    { tags: { $exists: true } },
    { "tags.0": { $eq: "bovino" } },
  ] },
  { $set: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { $and: [
    { tags: { $exists: true } },
    { "tags.0": { $eq: "ave" } },
  ] },
  { $set: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });