const axios = require("axios");

//test cases for "/reports" post route

//test-1
//description: send correct details to create new report
module.exports.test1 = async (req, res) => {
  try {
    const result = await axios.post(`${process.env.AXIOS_POSTURL}`, {
      userID: "user-1",
      marketID: "market-1",
      marketName: "Vashi Navi Mumbai",
      cmdtyID: "cmdty-1",
      marketType: "Mandi",
      cmdtyName: "Potato",
      priceUnit: "Pack",
      convFctr: 50,
      price: 700,
    });
    return res.status(201).json({ result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test-2
//description: create another report
module.exports.test2 = async (req, res) => {
  try {
    const result = await axios.post(`${process.env.AXIOS_POSTURL}`, {
      userID: "user-2",
      marketID: "market-1",
      marketName: "Vashi Navi Mumbai",
      // marketType: "Mandi",
      cmdtyID: "cmdty-1",
      cmdtyName: "Potato",
      priceUnit: "Quintal",
      convFctr: 100,
      price: 1600,
    });
    return res.status(201).json({ result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test-3
//description: repeat the userID to get failure message
module.exports.test3 = async (req, res) => {
  try {
    const result = await axios.post(`${process.env.AXIOS_POSTURL}`, {
      userID: "user-1",
      marketID: "market-1",
      marketName: "Vashi Navi Mumbai",
      cmdtyID: "cmdty-1",
      marketType: "Mandi",
      cmdtyName: "Potato",
      priceUnit: "Pack",
      convFctr: 50,
      price: 700,
    });
    return res.status(201).json({ result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test cases for "/reports" get route

//test-4
//description: used correct ID to get correct results
module.exports.test4 = async (req, res) => {
  try {
    var reportID = "629bcb830494ec05f56f5937";
    var url = process.env.AXIOS_GETURL + reportID;
    const result = await axios.get(`${url}`);
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};

//test-5
//description: used incorrect ID to get failure message
module.exports.test5 = async (req, res) => {
  try {
    var url = process.env.AXIOS_GETURL + "629a6b494eb03ccd6c0883ge";
    const result = await axios.get(`${url}`);
    return res.status(201).json({ status: "success", result: result.data });
  } catch (e) {
    return res.status(400).json({ status: "failure", error: e });
  }
};
