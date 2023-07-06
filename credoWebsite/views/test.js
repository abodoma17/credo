document.getElementById("button1").onclick = createBat;

function createBat(){
    console.log("button clicked")
    let batch_num = document.getElementById("inputBatch").value;
    let owner_name = document.getElementById("manufacturerName").value;
    let medicine_name = document.getElementById("inputMedicineName").value;
    let expiration_date = document.getElementById("inputExpiration").value;
    let production_date = document.getElementById("inputProduction").value;
    let token_creation_date = new Date().toJSON();

    let json_file = JSON.stringify({
        batch_num,
        owner_name,
        medicine_name,
        expiration_date,
        production_date,
        token_creation_date
    });

    console.log(json_file);
}