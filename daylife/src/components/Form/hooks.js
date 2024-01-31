export const sendEmail = async (data) => {
    const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data['user-name'],
            message: data['user-message'],
        })
    })
    return res
}