
const form = document.querySelector('form')
const inputQuery = document.getElementById('inputQuery')

const latitudeQuery = document.getElementById('latitude')
const longitudeQuery = document.getElementById('longitude')
const locationQuery = document.getElementById('location')
const reportQuery = document.getElementById('report')
const summaryQuery = document.getElementById('summary')

//content allocation
// const latitudeCon = latitudeQuery.textContent
// const longitudeCon = longitudeQuery.textContent
// const locationCon = locationQuery.textContent
// const reportCon = reportQuery.textContent
// const summaryCon = summaryQuery.textContent

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = inputQuery.value
    const url = '/weather?address=' + address
    fetch(url)
    .then((res) => {
        res.json().then((data) => {
            if (data.err) {
                console.log(data.err)
            }
            latitudeQuery.textContent = data.Latitude
            longitudeQuery.textContent = data.Longitude
            locationQuery.textContent = data.Location
            reportQuery.textContent = data.Report
            summaryQuery.textContent = data.Summary
            console.log(data)
        })
    })
    .catch(e => console.log(e))
})