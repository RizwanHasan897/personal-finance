import config from './dbConfig.js';
import sql from 'mssql';

const getMonth = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM MonthlyFinance");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    sql.close();
  }
};

export default {
    getMonth
};
