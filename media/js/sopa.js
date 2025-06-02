const words = ["SOFTWARE", "IEEE", "TECNOLOGIA", "ERROR", "LINUX"];
const gridSize = 10;

class WordSearchGame {
    constructor(words, gridSize) {
        this.words = words;
        this.gridSize = gridSize;
        this.wordGrid = [];
        this.currentSelection = [];
        this.wordsFound = [];

        document.addEventListener('DOMContentLoaded', () => {
            this.startNewGame();
            document.getElementById('generateNew').addEventListener('click', () => this.startNewGame());
        });
    }

    startNewGame() {
        this.wordGrid = this.generateEmptyGrid(this.gridSize);
        this.currentSelection = [];
        this.wordsFound = [];
        this.placeWordsInGrid(this.words, this.wordGrid);
        this.renderGrid(this.wordGrid);
        this.renderWordsList(this.words);
    }

    generateEmptyGrid(size) {
        return Array(size).fill(null).map(() => Array(size).fill('_'));
    }

    placeWordsInGrid(words, grid) {
        words.forEach(word => {
            let placed = false;
            while (!placed) {
                const row = Math.floor(Math.random() * this.gridSize);
                const col = Math.floor(Math.random() * (this.gridSize - word.length));
                if (this.canPlaceWordAt(word, grid, row, col)) {
                    for (let i = 0; i < word.length; i++) {
                        grid[row][col + i] = word[i];
                    }
                    placed = true;
                }
            }
        });
    }

    canPlaceWordAt(word, grid, row, col) {
        for (let i = 0; i < word.length; i++) {
            if (grid[row][col + i] !== '_') return false;
        }
        return true;
    }

    renderGrid(grid) {
        const container = document.getElementById('wordSearchContainer');
        container.innerHTML = '';
        grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.textContent = cell === '_' ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : cell;
                cellElement.dataset.index = rowIndex * this.gridSize + colIndex;
                cellElement.addEventListener('click', () => this.selectCell(rowIndex, colIndex, cellElement));
                container.appendChild(cellElement);
            });
        });
    }

    renderWordsList(words) {
        const wordsListContainer = document.getElementById('wordsList');
        wordsListContainer.innerHTML = '';
        words.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.textContent = word;
            wordElement.setAttribute('data-word', word);
            wordsListContainer.appendChild(wordElement);
        });
    }

    selectCell(rowIndex, colIndex, cellElement) {
        const index = rowIndex * this.gridSize + colIndex;
        if (this.currentSelection.includes(index)) return;

        cellElement.classList.add('selected');
        this.currentSelection.push(index);

        const selectedWord = this.currentSelection.map(idx => {
            const row = Math.floor(idx / this.gridSize);
            const col = idx % this.gridSize;
            return this.wordGrid[row][col];
        }).join('');

        if (this.words.includes(selectedWord) && !this.wordsFound.includes(selectedWord)) {
            this.wordsFound.push(selectedWord);
            alert(`¡Has encontrado la palabra "${selectedWord}"!`);
            this.currentSelection.forEach(idx => {
                document.querySelector(`[data-index="${idx}"]`).classList.add('found');
            });

            document.querySelector(`[data-word="${selectedWord}"]`).classList.add('found');
            this.currentSelection = [];

            if (this.wordsFound.length === this.words.length) {
                setTimeout(() => {
                    alert('¡Has ganado!');
                    this.startNewGame();
                }, 1000);
            }
        } else if (!this.words.some(word => word.startsWith(selectedWord))) {
            this.currentSelection.forEach(idx => {
                document.querySelector(`[data-index="${idx}"]`).classList.remove('selected');
            });
            this.currentSelection = [];
        }
    }
}

new WordSearchGame(words, gridSize);
