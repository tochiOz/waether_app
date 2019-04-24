const request = require('request')

const geocode = (address, callback) => {
    const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidHVlbG9wZXIiLCJhIjoiY2p1dmhhdnJiMDFtOTRlcXIzam13OW1iayJ9.WZDMLXn5ToFglfiu3NpXmQ'

    request({ url: locationUrl, json: true }, (err, res) => {
        if (res) {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
    
            
        } else if (err) {
            callback('unable to connect to the location services', undefined)
        }
    })
}

module.exports = geocode