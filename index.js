class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  load(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length) {
      return this.items.pop();
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length) {
      return this.items.reduce((acc, atual, index, items) => {
       return acc + atual;
      }, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length) {
      const soma = this.items.reduce((acc, atual, index, items) => {
        return acc + atual;
       }, 0);
       return soma / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
