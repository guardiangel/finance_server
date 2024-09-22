import mongoose from "mongoose"
import {loadType} from "mongoose-currency" ;
loadType(mongoose) ;
const Schema = mongoose.Schema ;

const dailySchema =  new Schema(
    {
        date:{
            type:String,
        },
        revenue:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        expenses:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
    },
    {toJSON:{getters:true}}
);

const monthSchema = new Schema(
    {
        month:{
            type:String,
        },
        revenue:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        expenses:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        operationalExpenses:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        nonOperationalExpenses:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        }
    },
    {toJSON:{getters:true}}
)


const KPISchema = new Schema(
    {
        totalProfit :{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        totalRevenue :{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        totalExpense :{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:v=>v/100
        },
        expensesByCategory:{
            type:Map,
            of:{
                type:mongoose.Types.Currency,
                currency:"USD",
                get:v=>v/100
            }
        },
        monthlyData:[monthSchema],
        dailyData:[dailySchema],
    },
    {timestamps:true,toJSON:{getters:true}}
);

 const KPI_Model = mongoose.model("KPI", KPISchema) ;
 export default KPI_Model ;