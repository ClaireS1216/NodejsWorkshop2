const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const PartnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner = mongoose.model("Partner", PartnerSchema);

module.exports = Partner;
