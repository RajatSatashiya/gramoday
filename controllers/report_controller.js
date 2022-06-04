const Commodity = require("../models/commodity");

module.exports.createReport = async (req, res) => {
  try {
    var reportDetails = req.body;
    reportDetails["priceUnit"] = "KG";
    reportDetails["price"] /= reportDetails["convFctr"];
    reportDetails["convFctr"] = 0;
    const commodity = Commodity(reportDetails);
    await commodity.save();
    return res.status(201).json({ status: "success", reportID: commodity._id });
  } catch (e) {
    console.log("error: " + e);
    return res.status(400).json({ status: "failure", error: e });
  }
};

module.exports.getReport = async (req, res) => {
  try {
    const report = await Commodity.findById(req.query.reportID, {
      _id: 0,
      __v: 0,
      updatedAt: 0,
    });

    const report2 = await Commodity.findById(req.query.reportID);

    const result = await Commodity.aggregate([
      {
        $match: {
          $and: [
            { marketID: { $eq: report2.marketID } },
            { cmdtyID: { $eq: report2.cmdtyID } },
          ],
        },
      },
      {
        $group: {
          _id: {
            _id: "$marketID",
            cmdtyID: "$cmdtyID",
          },
          avg: {
            $avg: "$price",
          },
          users: {
            $push: "$userID",
          },
          // sumPrice: {
          //   $sum: "$price",
          // },
        },
      },
    ]);
    console.log(result);
    // return res.status(201).json({ result });
    return res.status(201).json({
      _id: report2._id,
      cmdtyName: report2.cmdtyName,
      cmdtyID: report2.cmdtyID,
      marketID: report2.marketID,
      marketName: report2.marketName,
      timestamp: report2.createdAt,
      users: result[0].users,
      priceUnit: report2.priceUnit,
      price: result[0].avg,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "failure", error: e });
  }
};
