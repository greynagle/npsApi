'use strict';

const state={
    q:'',
    stateCode:'',
    numRes:10,
    apiKey:'XjKRgLXj6cO40HUP1QjUW5GqLC8Ul3M6Ux6wXnkz',
    get:'https://developer.nps.gov/api/v1/parks?',
    results:[]   
}

function handleQuery(){
    $('#q').change(e => {
        e.preventDefault();
        return state.q=e.target.value;
    })
}

function handleStateCode(){
    $('#stateCode').change(e => {
        e.preventDefault();
        return state.stateCode=e.target.value;
    })
}

function handleLimit(){
    $('#numRes').change(e => {
        e.preventDefault();
        return state.numRes=e.target.value;
    })
}

function handleSubmit() {
    $('input[type="submit"]').click(e=>{
        e.preventDefault()
        getData()
        updateList()
    })
}

function getData(){
    let query = state.get;
    if(state.stateCode!==''){
        query.concat(`stateCode=${state.stateCode}&`)
    }

    query.concat(`limit=${state.numRes}&`)

    if(state.q!==''){
        query.concat(`q=${state.q}&`)
    } else {
        return alert('Must enter a query')
    }

    query.concat(`api_key=${state.apiKey}`)

    fetch(query)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            return state.results=responseJson})
}

function updateList(){
    $('.results').empty();
    $('.results').html("got here")
}

function main() {
    handleQuery()
    handleStateCode()
    handleLimit()
    handleSubmit()
}

$(main)