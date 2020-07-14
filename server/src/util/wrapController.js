export default function wrapController(controller){

  return async (req, res) => {

    const data = req.method === "POST" ? req.body : req.query;

    try { 
      const result = await controller(data);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).send(e.message);
    }

  };

}