const mongoose = require("../mongoose");
const { Schema, model } = mongoose;
const consumerSchema = new Schema({
  Username: String, // String is shorthand for {type: String}
  Password: String,
});
const ConsumerModel = model("Consumer", consumerSchema);

const createConsumerModel = async (consumerModel) => {
  const newConsumerModel = await ConsumerModel.create(consumerModel);
  return newConsumerModel;
};

const getAllConsumerModels = async () => {
  const consumerModels = await ConsumerModel.find();
  return consumerModels;
};

module.exports = { getAllConsumerModels, createConsumerModel };
