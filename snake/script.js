(function(document) {

    const DIRECTIONS = {
        UP: "UP",
        DOWN: "DOWN",
        LEFT: "LEFT",
        RIGHT: "RIGHT",
    };

    function point(x, y) {
        return {x: x, y: y};
    }

    function randomPoint(boundX, boundY) {
        let randomX = Math.floor(Math.random() * boundX);
        let randomY = Math.floor(Math.random() * boundY);
        return point(randomX, randomY)
    }

    class Snake {

        constructor(boundX, boundY, size) {
            this.tick = 0;
            this.boundX = boundX;
            this.boundY = boundY;
            this._initSnake(size);
            console.log(this);
        }

        _initSnake(size) {
            this._directions = [];
            this._directionsTime = [];
            this._points = [];
            for (let i = 0; i < size; i++) {
                this._directions.push(DIRECTIONS.UP);
                this._directionsTime.push(-i);
                if (i === 0) {
                    this._points.push(randomPoint(this.boundX, this.boundY));
                } else {
                    let previousPoint = this._points[i-1];
                    this._points.push(point(previousPoint.x, previousPoint.y + 1))
                }
            }
        }

        move() {
            for (let i = 0; i < this._points.length; i++) {
                let time = this._directionsTime.findIndex(time => time <= this.tick-i);
                this._move(i, this._directions[time]);
            }
            this.tick++;
        }

        _move(index, direction) {
            let currentX = this._points[index].x;
            let currentY = this._points[index].y;
            switch (direction) {
                case DIRECTIONS.RIGHT:
                    this._points[index].x = (currentX + 1 + this.boundX) % this.boundX;
                    break;
                case DIRECTIONS.LEFT:
                    this._points[index].x = (currentX - 1 + this.boundX) % this.boundX;
                    break;
                case DIRECTIONS.UP:
                    this._points[index].y = (currentY - 1 + this.boundY) % this.boundY;
                    break;
                case DIRECTIONS.DOWN:
                    this._points[index].y = (currentY + 1 + this.boundY) % this.boundY;
                    break;
            }
        }

        get points() {
            return this._points;
        }

        changeDirection(newDirection) {
            this._directions.unshift(newDirection);
            this._directionsTime.unshift(this.tick);
        }
    }

    class Grid {
        COLUMNS = 64;
        ROWS = 64;

        constructor() {
            this._snake = new Snake(this.COLUMNS, this.ROWS, 10);
        }

        get snake() {
            return this._snake;
        }
    }

    function initHtmlElements(grid) {
        drawTable(grid.COLUMNS, grid.ROWS);
        drawSnake(grid.snake);
    }

    function drawTable(columns, rows) {
        let table = document.getElementById('grid');

        for (let nRows = 0; nRows < rows; nRows++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let nCols = 0; nCols < columns; nCols++) {
                let cell = document.createElement('td');
                cell.dataset.row = nRows.toString();
                cell.dataset.col = nCols.toString();
                row.appendChild(cell);
            }
        }
    }

    function drawSnake(snake) {
        let table = document.getElementById('grid');

        table.querySelectorAll(".darkCell").forEach(e => e.classList.remove('darkCell'));
        for (let point of snake.points) {
            table.querySelector(`[data-row="${point.y}"][data-col="${point.x}"`).classList.add('darkCell');
        }
    }

    let grid = new Grid();
    initHtmlElements(grid);
    setInterval(function () {
        grid.snake.move();
        drawSnake(grid.snake);
    }, 500);

    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowDown") {
            grid.snake.changeDirection(DIRECTIONS.DOWN);
        } else if (event.key === "ArrowUp") {
            grid.snake.changeDirection(DIRECTIONS.UP);
        } else if (event.key === "ArrowLeft") {
            grid.snake.changeDirection(DIRECTIONS.LEFT);
        } else if (event.key === "ArrowRight") {
            grid.snake.changeDirection(DIRECTIONS.RIGHT);
        }
    })
})(document);
