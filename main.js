var pets =[];

function addPet() {
    event.preventDefault();
    let pet = {
        "mangoName": document.getElementById("fname").value,
        "mangoBreed": document.getElementById("fbreed").value,
        "mangoOwner": document.getElementById("fowner").value,
        "mangoPhone": document.getElementById("fphone").value,
    }

    document.getElementById("fname").value = "";
    document.getElementById("fbreed").value = "";
    document.getElementById("fonwer").value = "";
    document.getElementById("fphone").value = "";

    pets.push(pet);

    renderTable();
}

function renderTable(){

    let table = document.getElementById("dataTable");
    table.innerhtml = ` <tr>
        <th>id</th>
        <th>nome</th>
        <th>specimens</th>
        <th>owninni</th>
        <th>phone</th>
        <th>remove</th>
</tr>`

for (let i = 0; i < pets.length; i++);
{
    table.innerhtml = table.innerhtml + `<td>${ i }</td>
        <td>${ pets[i].mangoName }</td>
        <td>${ pets[i].mangoBreed}</td>
        <td>${ pets[i].mangoOwner }</td>
        <td>${ pets[i].mangoPhone }</td>
        <td></td>`
}
}