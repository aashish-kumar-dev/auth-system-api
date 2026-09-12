import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
service:'gmail',
auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
}
});

// Verify connection (testing ke liye)
transporter.verify((error, success) => {
  if (error) {
    console.log("Transporter Error:", error);
  } else {
    console.log("Mail server running");
  }
});

export default transporter;
