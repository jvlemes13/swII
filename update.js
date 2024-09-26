app.post('/submit_update', upload.single('image'), (req, res) => {
  const { id, name, password, phone } = req.body;
  let image = req.file ? req.file.filename : null;
 
  let sql = "UPDATE 3bb_usuario SET nome = ?, senha = ?, telefone = ?";
  let params = [name, password, phone];
 
  if (image) {
    sql += ", imagem = ?";
    params.push(image);
  }
 
  sql += " WHERE id = ?";
  params.push(id);
 
  con.query(sql, params, function (err, result) {
    if (err) throw err;
    res.send("Usuário atualizado com sucesso!");
  });
});
