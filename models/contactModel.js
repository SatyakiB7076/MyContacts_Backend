const mongoose = require("mongoose");
//timestamps true auto updates the updateat and deletat fields to the schema
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact Name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact Email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact number"],
    },
}, {
    timestamps: true,
});
//exporting the schema model as Contact for others to import
module.exports = mongoose.model("Contact", contactSchema);
