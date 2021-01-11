//knexfile.js
module.exports = {
    client: 'pg',
    connection: {
        connectionString : "postgres://ejekfidvzbwocn:880ffb78fc2c551a225c54baf7ee267f223c0fb733af792d4f92b314abeace3e@ec2-52-211-161-21.eu-west-1.compute.amazonaws.com:5432/d4e04i44clk1cr",
        ssl: { rejectUnauthorized: false }
    }
};