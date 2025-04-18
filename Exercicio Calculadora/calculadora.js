//Factory function
// function criarCalculadora(){
//     return{
//         display: document.querySelector('.display'),

//         iniciarCalculadora(){
//             this.clickButtons();
//             this.btnDel();
//         },

//         clickButtons(){
//             document.addEventListener('click', e => {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')){
//                     this.btnDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')){
//                     this.btnClear();
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.btnDel();
//                 }

//                 if(el.classList.contains('btn-equal')){
//                     this.operacaoMatematica();
//                 }
//             })
//         },

//         btnDisplay(value){
//             this.display.value += value;
//         },

//         btnClear(){
//             this.display.value = '';
//         },

//         btnDel(){
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         operacaoMatematica(){
//             if(/^[0-9+\-*/().\s]+$/.test(this.display.value)){
//                 try {
//                     this.display.value = eval(this.display.value);
//                 } catch (e) {
//                     alert('Operação Invalida!');
//                     this.btnClear();
//                 }
//             }
//         }
//     }
// }

// const calculadora = criarCalculadora();

// calculadora.iniciarCalculadora();

//Constructor Function

function Calculadora() {
    this.display = document.querySelector('.display'),

    this.iniciarCalculadora = () => {
        this.clickButtons();
    };

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.btnClear();
            }

            if (el.classList.contains('btn-del')) {
                this.btnDel();
            }

            if (el.classList.contains('btn-equal')) {
                operacaoMatematica();
            }
        })
    };

    this.btnDisplay = (value) => this.display.value += value;

    this.btnClear = () => {
        this.display.value = '';
    };

    this.btnDel = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    const operacaoMatematica = () => {
        if (/^[0-9+\-*/().\s]+$/.test(this.display.value)) {
            try {
                this.display.value = eval(this.display.value);
            } catch (e) {
                alert('Operação Invalida!');
                this.btnClear();
            }
        }
    }
}

const calculadora = new Calculadora();

calculadora.iniciarCalculadora();
