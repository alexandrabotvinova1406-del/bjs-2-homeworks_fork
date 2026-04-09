// ========== Задача 1. Печатное издание ==========
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) this._state = 0;
    else if (newState > 100) this._state = 100;
    else this._state = newState;
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}


// ========== Задача 2. Библиотека ==========
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const found = this.books.find(book => book[type] === value);
    return found || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      const book = this.books[index];
      this.books.splice(index, 1);
      return book;
    }
    return null;
  }
}


// ========== Задача 3. Журнал успеваемости (со звездочкой) ==========
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return;
    if (!this.marks[subject]) this.marks[subject] = [];
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const marks = this.marks[subject];
    if (!marks || marks.length === 0) return 0;
    const sum = marks.reduce((acc, m) => acc + m, 0);
    return sum / marks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;
    const total = subjects.reduce((acc, subj) => acc + this.getAverageBySubject(subj), 0);
    return total / subjects.length;
  }
}
