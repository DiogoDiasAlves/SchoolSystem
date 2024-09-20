angular.module("meuModulo")
.controller("indexController", function ($scope) {
    $scope.titulo = "SchoolSystem";
    $scope.alunos = [
        { nome: "Diogo", email: "Diogo@gmail.com", nota1: 65, nota2: 80, nota3: 55 },
        { nome: "Gabrielle", email: "Gabrielle@gmail.com", nota1: 75, nota2: 80, nota3: 55 },
        { nome: "Vitor", email: "Vitor@gmail.com", nota1: 95, nota2: 60, nota3: 55 },
        { nome: "Frank", email: "Frank@gmail.com", nota1: 65, nota2: 30, nota3: 55 }
    ];

    var init = function () {
        $scope.alunos.forEach(function (aluno) {
            aluno.media = calcularMedia(aluno);
        });
        limpaForm();
    };

    var calcularMedia = function (aluno) {
        return ((parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3).toFixed(2);
    };

    $scope.abreAddAluno = function() {
        $scope.editando = false;
        limpaForm();
        $('#modal1').modal('open');
    };

    $scope.addAluno = function (Aluno) {
        Aluno.media = calcularMedia(Aluno);
        $scope.alunos.push(Aluno);
        $('#modal1').modal('close');
        limpaForm();

        $scope.editando = false;
        var alunoEditar;

    };

    $scope.editarAluno = function(Aluno) {
        $scope.editando = true;
        $scope.Aluno = Aluno
        $scope.Aluno = angular.copy(Aluno);
        $('#modal1').modal('open');
        alunoEditar = Aluno;
    };



    $scope.salvarAluno = function(Aluno) {
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = calcularMedia(Aluno);
        $('#modal1').modal('close');
    };

        $scope.deletarAluno = function(Aluno){
            for(var index in $scope.alunos){
                var aux = $scope.alunos[index];
                if(Aluno===aux)
                $scope.alunos.splice(index,1);
            }
       
    };

    var limpaForm = function() {
        $scope.Aluno = { nome: "", email: "", nota1: '', nota2: '', nota3: '' };
    };

    init();
});
