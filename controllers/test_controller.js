const axios = require("axios");

//test cases for "/reports" get route

//test-1
//description: used correct ID to get correct results
module.exports.test1 = async (req, res) => {
  try {
    var url = process.env.AXIOS_GETURL + "629a6b494eb03ccd6c0883fe";
    const result = await axios.get(`${url}`);
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test-2
//description: used incorrect ID to get failure message
module.exports.test2 = async (req, res) => {
  try {
    var url = process.env.AXIOS_GETURL + "629a6b494eb03ccd6c0883ge";
    const result = await axios.get(`${url}`);
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test cases for "/reports" post route

//test-3
//description: send correct details to create new report
module.exports.test3 = async (req, res) => {
  try {
    const result = await axios.post(`${process.env.AXIOS_POSTURL}`, {
      userID: "user-5",
      marketID: "market-2",
      marketName: "Vashi Navi Mumbai1",
      cmdtyID: "cmdty-2",
      marketType: "Mandi",
      cmdtyName: "Tomato",
      priceUnit: "Pack1",
      convFctr: 50,
      price: 720,
    });
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test-4
//description: repeat the userID to get failure message
module.exports.test4 = async (req, res) => {
  try {
    const result = await axios.post(`${process.env.AXIOS_POSTURL}`, {
      userID: "user-5",
      marketID: "market-2",
      marketName: "Vashi Navi Mumbai1",
      cmdtyID: "cmdty-2",
      marketType: "Mandi",
      cmdtyName: "Tomato",
      priceUnit: "Pack1",
      convFctr: 50,
      price: 720,
    });
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};
