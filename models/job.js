const db = require('../db');
const ExpressError = require('../expressError');

class Job{
    static async findAll({salary, num_employees}){
        let query = (`
            SELECT title, salary, num_employees
            FROM jobs AS j
            LEFT JOIN companies AS c
            ON company_handle = handle
        `)
        let queryValues = [];
        let whereExpressions = [];
        if(salary !== undefined){
            queryValues.push(salary)
            whereExpressions.push(`salary > $${queryValues.length}`)
        }
        if(num_employees !== undefined){
            queryValues.push(num_employees);
            whereExpressions.push(`num_employees > $${queryValues.length}`);
        }
        if(queryValues.length > 0){
            query += 'WHERE ' +  whereExpressions.join(' AND ')
        }
        console.log(query, queryValues)
        let result = await db.query(query, queryValues)
        console.log(result)
        return result.rows
    }

    static prak(id){
        if(id.length < 5){
            throw new ExpressError('err6', 404)
        }
    }
}

module.exports = Job;