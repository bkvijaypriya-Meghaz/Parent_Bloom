export async function saveInfo(url, data) {

    const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({parentInfo: data})
    })
    return await response.json();
}

export async function updateInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json',
          'Ocp-Apim-Subscription-Key': 'a07e3fa63cca49d1bb4a6a4eb29fc527'
        },
      body: JSON.stringify(data)
    });
    return await response.json();
}

export async function DeleteInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({deleteInfo: data})
    });
    return await response.json();
}
export async function getInfo(url) {
    console.log("*** executing parent getInfo ***")
    const response = await fetch(`${url}`, 
    {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'a07e3fa63cca49d1bb4a6a4eb29fc527'
        },
    })
    return await response.json();
}