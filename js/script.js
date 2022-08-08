function calcular() {
    let num1 = parseFloat(prompt('Digite a primeira nota'));
    let num2 = parseFloat(prompt('Digite a segunda nota'));
    let num3 = parseFloat(prompt('Digite a terceira nota'));
    let min = parseFloat(prompt('Digite a nota minima para aprovação'));
    let med = (num1+num2+num3)/3;
    let aprv = med >= min ? 'aprovado' : 'reprovado';
    let res = document.querySelector('section#res');

    res.innerHTML = `<p>A média de aproveitamento foi ${med.toFixed(2)} e seguindo a nota mínima de ${min} o aluno foi ${aprv}.</p>`;

}