export function generateOTP(length = 4) {
  // Declare a digits variable
  // which stores all digits
  const digits = '0123456789'
  let OTP = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}
export default {
  generateOTP,
}
