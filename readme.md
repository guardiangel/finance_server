This is the back end of the finance app. 

1.Create a new .env file in the root directory,adjust the MONGO_URL accordingly.
    MONGO_URL=""
    PORT=9999

2.UnComment out the below lines in the index.js file
        // await mongoose.connection.db.dropDatabase();
        // KPI_Model.insertMany(kpis);//Initialize the data.
        // Product.insertMany(products);//Initialize the data.
        // Transaction.insertMany(transactions);//Initialize the data.
3.Start the app.
    npm run dev
