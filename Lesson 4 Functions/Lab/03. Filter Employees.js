function solve(data, criteria) {
    let employees = JSON.parse(data);
    let filterName = criteria.indexOf('all') >= 0 ?
        'all' :
        criteria.split('-')[0];

    let criteriaName = criteria.split('-')[1];

    let employeesToPrint = findEmployees(employees, filterName, criteriaName);

    let result = '';

    for (let i = 0; i < employeesToPrint.length; i++) {
        result += `${i}. ${employeesToPrint[i].first_name} ${employeesToPrint[i].last_name} - ${employeesToPrint[i].email}\n`;        
    }

    return result.trim();

    function findEmployees(employees, criteria) {
        if (criteria !== 'all') {
            employees = employees.filter(x => x[filterName] === criteriaName);
        }

        return employees;
    }
}

function solve2(data, criteria) {
    let criteriaName = '';
    let criteriaValue = '';
    const employees = JSON.parse(data);

    if (criteria === 'all') {
        employees.forEach((e, i) => print(e, i));
    } else {
        [criteriaName, criteriaValue] = criteria.split('-');

        employees
            .filter(e => e[criteriaName] === criteriaValue)
            .forEach((e, i) => print(e, i));
    }

    function print(emp, i){
        console.log(`${i}. ${emp.first_name + ' ' + emp.last_name} - ${emp.email}`);
    }
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));