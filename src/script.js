
var form = document.getElementById("form")


form.addEventListener('submit', function(e){
    e.preventDefault()

    var userName = document.getElementById("userName").value
    

    fetch("https://api.github.com/users/"+ userName + "/repos")
    .then((result) => result.json())
    .then((data) => {
      
        document.getElementById("ovner").innerHTML = userName
        
        var resultData = '';

    $.each(data, function(i, get) {
        resultData += '<tr>';
        resultData += '<td>' + get.name + '</td>';
        resultData += '<td>' + get.language + '</td>';
        resultData += '<td>' + get.stargazers_count + '</td>';
        resultData += '</tr>';
    });

     $('tbody').html(resultData);
    
    request.send();
    })
})


