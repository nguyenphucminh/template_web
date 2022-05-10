module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63a0742faeaae14101432f4a5b742646'),
  },
});
