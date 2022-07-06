var systemGuess = Math.floor(Math.random()*100)+1

function guess()
{
    var num = document.getElementById('in').value
    if(num === '' || num>100 || num<1)
    {
        console.log('Input is not Valid');
        document.getElementById('out').innerText = 'Input is not valid'
    }
    else
    {
        var num = parseInt(document.getElementById('in').value)
        if(num === systemGuess)
        {
            console.log('Got the answer correctly');
            document.getElementById('out').innerHTML = '<i>Got the answer correctly!</i>'
        }
        else if(num > systemGuess)
        {
            console.log('Guess a smaller number')
            document.getElementById('out').innerText = 'Guess a smaller number'
        }
        else
        {
            console.log('Guess a bigger number')
            document.getElementById('out').innerText = 'Guess a bigger number'
        }
    }
}