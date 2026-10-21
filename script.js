const form = document.getElementById("patientForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const patientId =
        document.getElementById("patientId").value.trim();

    const patientName =
        document.getElementById("patientName").value.trim();

    const department =
        document.getElementById("department").value;

    const appointmentDate =
        document.getElementById("appointmentDate").value;

    if (!patientId || !patientName ||
        !department || !appointmentDate) {
        message.textContent = "Please complete all fields.";
        return;
    }

    message.textContent =
        "Patient details validated successfully. " +
        "Connect a secure backend to save the record.";

    console.log({
        patientId,
        patientName,
        department,
        appointmentDate
    });
});

form.addEventListener("reset", function () {
    message.textContent = "";
});