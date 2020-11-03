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
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({parentUpdateInfo: data})
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
    const response = await fetch(`${url}`, {method: 'GET'})
    return await response.json();
}