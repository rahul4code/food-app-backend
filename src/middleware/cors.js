const applyCORS = (req, res, next) => {
  if (req.method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  next();
};

module.exports = applyCORS;
