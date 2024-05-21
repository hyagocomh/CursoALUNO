import { Component } from '@angular/core';

@Component({
  selector: 'app-area-do-aluno',
  templateUrl: './area-do-aluno.component.html',
  styleUrls: ['./area-do-aluno.component.scss']
})
export class AreaDoAlunoComponent {
  constructor() {}

  semComplemento: boolean = false;

  onSubmit(form: HTMLFormElement) {
    const nome = (form.querySelector('#nome') as HTMLInputElement).value;
    const sobrenome = (form.querySelector('#sobrenome') as HTMLInputElement).value;
    const cpf = (form.querySelector('#cpf') as HTMLInputElement).value;
    const telefone = (form.querySelector('#telefone') as HTMLInputElement).value;
    const cep = (form.querySelector('#cep') as HTMLInputElement).value;
    const estado = (form.querySelector('#estado') as HTMLInputElement).value;
    const cidade = (form.querySelector('#cidade') as HTMLInputElement).value;
    const bairro = (form.querySelector('#bairro') as HTMLInputElement).value;
    const rua = (form.querySelector('#rua') as HTMLInputElement).value;
    const numero = (form.querySelector('#numero') as HTMLInputElement).value;
    const complementoInput = form.querySelector('#complemento') as HTMLInputElement;
    const complemento = complementoInput.value;
    const semComplemento = (form.querySelector('#semComplemento') as HTMLInputElement).checked;
    
    // Desabilitar ou habilitar o campo de complemento com base no estado do checkbox
    complementoInput.disabled = semComplemento;

    // Aqui você pode realizar ações com os dados do formulário, como enviar para um servidor ou armazenar localmente.
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("CPF:", cpf);
    console.log("Telefone:", telefone);
    console.log("CEP:", cep);
    console.log("Estado:", estado);
    console.log("Cidade:", cidade);
    console.log("Bairro:", bairro);
    console.log("Rua:", rua);
    console.log("Número:", numero);
    if (!semComplemento) {
      console.log("Complemento:", complemento);
    } else {
      console.log("Sem complemento");
    }
  }

  
}
