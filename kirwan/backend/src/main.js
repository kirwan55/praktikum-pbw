import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Daris Yusyfa Atqia",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Mie",
      rasa: "Aceh",
    },
    {
      id: 2,
      nama: "Ati",
      rasa: "Ampela",
    },
    {
      id: 3,
      nama: "Pecel",
      rasa: "Lele",
    },
    {
      id: 4,
      nama: "Baso",
      rasa: "Urat",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Es",
      rasa: "teh",
    },
    {
      id: 2,
      nama: "Anggur",
      rasa: "Merah",
    },
    {
      id: 3,
      nama: "Sirup",
      rasa: "Orson",
    },
    {
      id: 4,
      nama: "Tuak",
      rasa: "Bali",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
