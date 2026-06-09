const pacientes = {

    "12345678900": [
        {
            exame: "Hemograma",
            status: "Agendado",
            data: "15/06/2026",
            unidade: "Policlínica Centro"
        },
        {
            exame: "Ultrassonografia Abdominal",
            status: "Aguardando vaga",
            data: "-",
            unidade: "UPA Ibura"
        }
    ],

    "98765432100": [
        {
            exame: "Ressonância Magnética",
            status: "Em análise",
            data: "-",
            unidade: "Hospital da Mulher"
        }
    ]

};

function consultarExame(){

    const cpf = document.getElementById("cpf").value.trim();
    const resultado = document.getElementById("resultado");

    let total = 0;
    let agendados = 0;
    let pendentes = 0;

    if(pacientes[cpf]){

        let tabela = `
        <table>
            <tr>
                <th>Exame</th>
                <th>Status</th>
                <th>Data</th>
                <th>Unidade</th>
            </tr>
        `;

        pacientes[cpf].forEach(exame => {

            total++;

            let classe = "";

            if(exame.status === "Agendado"){
                classe = "agendado";
                agendados++;
            }
            else if(exame.status === "Em análise"){
                classe = "analise";
                pendentes++;
            }
            else{
                classe = "pendente";
                pendentes++;
            }

            tabela += `
            <tr>
                <td>${exame.exame}</td>
                <td class="${classe}">
                    ${exame.status}
                </td>
                <td>${exame.data}</td>
                <td>${exame.unidade}</td>
            </tr>
            `;
        });

        tabela += "</table>";

        document.getElementById("total").innerText = total;
        document.getElementById("agendados").innerText = agendados;
        document.getElementById("pendentes").innerText = pendentes;

        resultado.innerHTML = tabela;
    }
    else{

        document.getElementById("total").innerText = 0;
        document.getElementById("agendados").innerText = 0;
        document.getElementById("pendentes").innerText = 0;

        resultado.innerHTML = `
            <div class="naoencontrado">
                Nenhum exame encontrado para este CPF.
            </div>
        `;
    }
}