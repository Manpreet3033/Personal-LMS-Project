const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender')
const OtpSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 60 * 5,
    }
})

async function sendVerificationEmail(email, otp) {
	try {
		const mailResponse = await mailSender(
			email,
			otp,
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

OtpSchema.pre("save",async function(next) {
    if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
    next();
})

const Otp = mongoose.model("Otp", OtpSchema);

module.exports = Otp