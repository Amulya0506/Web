var T = new Twit({
    consumer_key:         'rtrZZ9RNfWrhuoFPtUxotvnN3',
    consumer_secret:      '6POXcZeeHEQ9PTOjbxLBi9FRpL0CR5mK9KgjwesqHyaNmU67iw',
    access_token:         '967886171316645890-eUhiZxjwoWLw869QGrzfRkKGbQUdL6y',
    access_token_secret:  'wfszYzKg9EjkUcflUqAPs2HqeeXPGsjDUCU5TKDHS4e9q'
    ,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  get the list of user id's that follow @amulyakasaraneni
//
T.get('followers/ids', { screen_name: 'amulyakasaraneni' },  function (err, data, response) {
    console.log(data)
})