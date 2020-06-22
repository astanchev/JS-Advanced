class Article {
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._commentId = 1;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like (username) {
        if (this._likes.includes(username)) {
            // You have to throw Error not return string !!!
            throw new Error(`You can't like the same article twice!`);
        } 

        if (this.creator === username) {
            // You have to throw Error not return string !!!
            throw new Error(`You can't like your own articles!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike (username) {
        const index = this._likes.indexOf(username);

        if (index < 0) {
            // You have to throw Error not return string !!!
            throw new Error(`You can't dislike this article!`);
        } 

        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id) {
        if (id === undefined || this._comments.every(c => c.id !== id)) {
            const commentToCreate = {
                id: this._commentId++,
                username,
                content,
                replies: [],
                replyId: 1
            };

            this._comments.push(commentToCreate);
            return `${username} commented on ${this.title}`;
        }

        const commentToReply = this._comments.find(c => c.id === id);
        const replay = {
            id: commentToReply.replyId++,
            username,
            content
        };

        commentToReply.replies.push(replay);
        return `You replied successfully`;
    }

    toString(sortingType) {
        const sortMethods = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => (a.username).localeCompare(b.username)
        };


        let result = '';

        result += 
        `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        const sortedComments = this._comments.slice().sort(sortMethods[sortingType]);
        
        for (const comment of sortedComments) {
            result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;

            if (comment.replies.length > 0) {
                const sortedReplies = comment.replies.slice().sort(sortMethods[sortingType]);

                for (const reply of sortedReplies) {
                    result += `--- ${comment.id}.${reply.id}. ${reply.username}: ${reply.content}\n`;
                }
            }
        }

        return result.trim();
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
console.log(art.dislike("Sally"));
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('asc'));

// John likes this article!
// My Article has 0 likes
// Ammy commented on My Article
// You replied successfully

// Title: My Article
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
