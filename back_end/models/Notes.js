const { Sequelize, DataTypes } = require("sequelize");

module.exports=(Sequelize, DataTypes)=>{
    const notes = Sequelize.define("notes",{
        title:{
           type:DataTypes.STRING,
           allowNull : false
        },
        note:{
          type:DataTypes.STRING,
          allowNull:false
        }
    })
    return notes;
}