/**
 * Created by techmaster on 2/26/17.
 */

function add(a, b) {
  let a_ = parseFloat(a);
  let b_ = parseFloat(b);

  if (isNaN(a_)) {
    throw new Error(`a ${a} is not number`);
  }

  if (isNaN(b_)) {
    throw new Error(`a ${a} is not number`);
  }

  return a_ + b_;
}

let minus = (a, b) => { return a - b};

exports.add = add;
exports.minus = minus;