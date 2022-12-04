class Sala {

    constructor() {
        this.id = 1;
        this.listaAlunos = [];

    }
    /*Aqui ela joga os dados na tabela */
    inserir(){
        let alunos = this.lerDados();
        this.adicionar(alunos)

        this.listaTabela();
        console.log(alunos)


    }
    /*Aqui pega o objeto da função lerDados e joga no construtor() id e no array listaAlunos.*/
    adicionar(alunos){
        this.listaAlunos.push(alunos);
        this.id++;
    }

    /*Essa função lê os dados do input e o insere no objeto alunos*/
    lerDados(){
        let alunos ={};

        alunos.id = this.id;
        alunos.nome = document.getElementById('nomeAluno').value;
        return alunos;

    }
    /* Essa função eu fiz em forma de tabela aqui tem apenas o Id e o Nome do aluno, da pra adaptar ela pra acrescentar mais coisas tipo sobrenome, idade, etc.*/
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.listaAlunos.length; i++) {
            
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.listaAlunos[i].id;
            td_nome.innerText = this.listaAlunos[i].nome;

            let imgEdit = document.createElement('img')
            imgEdit.src = '/img/edit.png';
            td_acoes.appendChild(imgEdit);
            imgEdit.setAttribute('onClick','sala.editar('+ this.listaAlunos[i].id+')')

            let imgExc = document.createElement('img');
            imgExc.src='/img/x-png-33.png';
            imgExc.setAttribute('onClick','sala.deletar('+ this.listaAlunos[i].id+')')
            td_acoes.appendChild(imgExc);
        }
    }
    
    /*Essa a função que deleta quando aperta o X, a chamada dela está na função da tabela na parte 'sala.deletar'. O delete pega o valor do id para deletar a linha da tabela e não o nome da pessoa. */
    deletar(id) {

        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.listaAlunos.length; i++) {
            if (this.listaAlunos[i].id==id) {
                this.listaAlunos.splice(i,1)
                tbody.deleteRow(i);
                
            }
        }

        console.log(this.listaAlunos)
    }
    /* 
    editar(){
        let editar = this.listaAlunos.find( editar => editar.td_nome == td_nome);
        this.listaAlunos.nome = td_nome;
        lerDados();
        alert('Vamos editar')

    }*/
}

let sala = new Sala();