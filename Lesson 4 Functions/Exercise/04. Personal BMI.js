function solve(...input) {
    let person = {};
    let name = input[0];
    let age = +input[1];
    let weight = +input[2];
    let height = +input[3];

    person.name = name;
    person.personalInfo = {
        age,
        weight,
        height
    };
    bmi = weight / Math.pow(height / 100, 2);
    let status = getStatus(bmi);
    let recommendation = status === 'obese' ? 
                            'admission required' :
                            undefined;

    person.BMI = Math.round(bmi);
    person.status = status;
    person.recommendation = recommendation;

    return person;

    function getStatus(bmi) {
        let status = '';

        if (bmi < 18.5) {
            status = 'underweight';
        } else if (bmi < 25) {
            status = 'normal';
        } else if (bmi < 30) {
            status = 'overweight';
        } else {
            status = 'obese';
        }

        return status;
    }
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));
console.log(solve('Kotooshu', 33, 152, 203));