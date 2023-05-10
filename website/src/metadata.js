link = 'https://ipfs.moralis.io:2053/ipfs/QmSMLRxPJMwBpaLok948aLWi8nuojQndqnx22kpexq68JJ/file.json'

console.log(link)

function reformatLink(link)
{
    link_tokens = link.split('/');
    link_tokens = link_tokens.slice(-3);
    new_link = 'https://ipfs.io/' + link_tokens[0] + '/' + link_tokens[1] + '/' + link_tokens[2];
    return new_link;
}

async function logJSON(link){
    new_link = reformatLink(link);
    const response = await fetch(new_link);
    const jsonData = await response.json();
    console.log(jsonData);
}

reformatLink(link);
logJSON(link);