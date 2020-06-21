class Forum {
   constructor() {
      this._users = [];
      this._questions = [];
      this._id = 1;
   }

   register(username, password, repeatPassword, email) {
      if (username === '' || password === '' ||
         repeatPassword === '' || email === '') {
         throw new Error('Input can not be empty');
      }

      if (password != repeatPassword) {
         throw new Error('Passwords do not match');
      }

      if (this._users.some(u => u.username === username || u.email === email)) {
         throw new Error('This user already exists!');
      }

      const user = {
         username,
         password,
         email,
         isLogged: false
      };

      this._users.push(user);
      return `${username} with ${email} was registered successfully!`;
   }

   login(username, password) {
      const user = this._users.find(u => u.username === username && u.password === password);

      if (user === undefined) {
         throw new Error('There is no such user');
      }

      user.isLogged = true;
      return 'Hello! You have logged in successfully';
   }

   logout(username, password) {
      const user = this._users.find(u => u.username === username && u.password === password);

      if (user === undefined) {
         throw new Error('There is no such user');
      }

      user.isLogged = false;
      return 'You have logged out successfully';
   }

   postQuestion(username, question) {
      const user = this._users.find(u => u.username === username);

      if (user === undefined || user.isLogged === false) {
         throw new Error('You should be logged in to post questions');
      }

      if (question === '') {
         throw new Error('Invalid question');
      }

      const questionToAdd = {
         id: this._id,
         question,
         username,
         answers: []
      };

      this._questions.push(questionToAdd);
      this._id++;

      return 'Your question has been posted successfully';
   }

   postAnswer(username, questionId, answer) {
      const user = this._users.find(u => u.username === username);

      if (user === undefined || user.isLogged === false) {
         throw new Error('You should be logged in to post answers');
      }

      if (answer === '') {
         throw new Error('Invalid answer');
      }

      const question = this._questions.find(q => q.id === Number(questionId));

      if (question === undefined) {
         throw new Error('There is no such question');
      }

      const answerToAdd = {
         username,
         answer
      };

      question.answers.push(answerToAdd);

      return 'Your answer has been posted successfully';
   }

   showQuestions() {
      let result = '';

      for (const q of this._questions) {
         result += `Question ${q.id} by ${q.username}: ${q.question}\n`;

         for (const a of q.answers) {
            result += `---${a.username}: ${a.answer}\n`;
         }
      }

      return result.trim();
   }
}

// let forum = new Forum();

// forum.register('Michael', '123', '123', 'michael@abv.bg');
// forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
// forum.login('Michael', '123');
// forum.login('Stoyan', '123ab7');

// forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
// forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
// forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
// forum.postAnswer('Michael', 2, "How old is she?");
// forum.postAnswer('Michael', 2, "Tell us how tall she is.");

// console.log(forum.showQuestions());

// Question 1 by Michael: Can I rent a snowboard from your shop?
// ---Stoyan: Yes, I have rented one last year.
// Question 2 by Stoyan: How long are supposed to be the ski for my daughter?
// ---Michael: How old is she?
// ---Michael: Tell us how tall she is.

let forum2 = new Forum();

forum2.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum2.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum2.login('Jonny', '12345');
forum2.login('Peter', '123ab7');

forum2.postQuestion('Jonny', "Do I need glasses for skiing?");
forum2.postAnswer('Peter', 1, "Yes, I have rented one last year.");
forum2.postAnswer('Jonny', 1, "What was your budget");
forum2.postAnswer('Peter', 1, "$50");
forum2.postAnswer('Jonny', 1, "Thank you :)");

console.log(forum2.showQuestions());

// Question 1 by Jonny: Do I need glasses for skiing?
// ---Peter: Yes, I have rented one last year.
// ---Jonny: What was your budget
// ---Peter: $50
// ---Jonny: Thank you :)