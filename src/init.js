import "./db";
import "./models/Pet";
import app from "./server";

const PORT = 5000;

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
