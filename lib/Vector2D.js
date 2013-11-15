/**
 *
 *   Vector2D.js
 *
 *   copyright 2001-2002, 2013 Kevin Lindsey
 *
 */

/**
 *  Vector2D
 *
 *  @param {Number} x
 *  @param {Number} y
 *  @returns {Vector2D}
 */
function Vector2D(x, y) {
    this.x = x;
    this.y = y;
}


/**
 *  length
 *
 *  @returns {Number}
 */
Vector2D.prototype.length = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};


/**
 *  dot
 *
 *  @param {Vector2D} that
 *  @returns {Number}
 */
Vector2D.prototype.dot = function(that) {
    return this.x*that.x + this.y*that.y;
};


/**
 *  cross
 *
 *  @param {Vector2D} that
 *  @returns {Number}
 */
Vector2D.prototype.cross = function(that) {
    return this.x*that.y - this.y*that.x;
}


/**
 *  unit
 *
 *  @returns {Vector2D}
 */
Vector2D.prototype.unit = function() {
    return this.divide( this.length() );
};


/**
 *  unitEquals
 *
 *  @returns {Vector2D}
 */
Vector2D.prototype.unitEquals = function() {
    this.divideEquals( this.length() );

    return this;
};


/**
 *  add
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.add = function(that) {
    return new Vector2D(this.x + that.x, this.y + that.y);
};


/**
 *  addEquals
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.addEquals = function(that) {
    this.x += that.x;
    this.y += that.y;

    return this;
};


/**
 *  subtract
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.subtract = function(that) {
    return new Vector2D(this.x - that.x, this.y - that.y);
};


/**
 *  subtractEquals
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.subtractEquals = function(that) {
    this.x -= that.x;
    this.y -= that.y;

    return this;
};


/**
 *  multiply
 *
 *  @param {Number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.multiply = function(scalar) {
    return new Vector2D(this.x * scalar, this.y * scalar);
};


/**
 *  multiplyEquals
 *
 *  @param {Number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.multiplyEquals = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
};


/**
 *  divide
 *
 *  @param {Number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.divide = function(scalar) {
    return new Vector2D(this.x / scalar, this.y / scalar);
};


/**
 *  divideEquals
 *
 *  @param {Number} scalar
 *  @returns {Vector2D}
 */
Vector2D.prototype.divideEquals = function(scalar) {
    this.x /= scalar;
    this.y /= scalar;

    return this;
};


/**
 *  perp
 *
 *  @returns {Vector2D}
 */
Vector2D.prototype.perp = function() {
    return new Vector2D(-this.y, this.x);
};


/**
 *  perpendicular
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.perpendicular = function(that) {
    return this.subtract(this.project(that));
};


/**
 *  project
 *
 *  @param {Vector2D} that
 *  @returns {Vector2D}
 */
Vector2D.prototype.project = function(that) {
    var percent = this.dot(that) / that.dot(that);

    return that.multiply(percent);
};


/**
 *  equals
 *
 *  @param {Vector2D} that
 *  @returns {Boolean}
 */
Vector2D.prototype.equals = function(that) {
    return (
        this.x === that.x &&
        this.y === that.y
    );
};

/**
 *  toString
 *
 *  @returns {String}
 */
Vector2D.prototype.toString = function() {
    return this.x + "," + this.y;
};


/**
 *  fromPoints
 *
 *  @param {Point2D} p1
 *  @param {Point2D} p2
 *  @returns {Vector2D}
 */
Vector2D.fromPoints = function(p1, p2) {
    return new Vector2D(
        p2.x - p1.x,
        p2.y - p1.y
    );
};

if (typeof module !== "undefined") {
    module.exports = Vector2D;
}