const container = document.body;
container.style = 'display:flex; flex-wrap: wrap; justify-content: space-around;';

class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render() {
        let button = document.createElement('button');
        button.textContent = this.text;
        button.style.border = this.border;
        button.style.color = this.color;
        button.style.background = this.background;
        button.style.cursor = "pointer";
        button.style.padding = "8px"

        button.onclick = () => {
            console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
        };

        container.appendChild(button);
    }
}

class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render() {
        super.render();
        let buttons = document.querySelectorAll('button');
        let lastButton = buttons[buttons.length - 1];
        lastButton.style.borderRadius = this.borderRadius;
        lastButton.onmouseover = () => {
            lastButton.style.transitionDuration = "0.5s"
            lastButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.8)';
        };
        lastButton.onmouseout = () => {
            lastButton.style.boxShadow = 'none';
            
        };
    }
}

let button1 = new Button("Кнопка 1", "1px solid black", "white", "blue");
let button2 = new Button("Кнопка 2", "2px solid red", "black", "red");
let button3 = new Button("Кнопка 3", "3px solid green", "yellow", "green");

button1.render();
button2.render();
button3.render();

let roundedButton1 = new RoundedButton("Округлена Кнопка 1", "1px solid black", "white", "purple", "20px");
let roundedButton2 = new RoundedButton("Округлена Кнопка 2", "2px solid blue", "black", "lightblue", "30px");
let roundedButton3 = new RoundedButton("Округлена Кнопка 3", "3px solid orange", "yellow", "orange", "40px");

roundedButton1.render();
roundedButton2.render();
roundedButton3.render();
