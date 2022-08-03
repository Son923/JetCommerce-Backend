module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12e7a00539ad068098906c9bcda3a659'),
  },
});
