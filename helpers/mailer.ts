import nodemailer from "nodemailer";

export const sendEmail = async (
  name: string,
  from: string,
  message: string,
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER!,
        pass: process.env.MAILTRAP_PASS!,
      },
    });

    const mailOptions = {
      from: from,
      to: "kamleshprajapati0928@gmail.com",
      subject: "Inquiry from Portfolio Website",
      html: `${name}, <br> ${message}`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
