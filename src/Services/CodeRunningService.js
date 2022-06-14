export async function CreateCodeRunning() {
    const response = await fetch('http://localhost:5200/api/CodeRunning', {
        methode: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            code: this.CreateCodeRunning.code,
            programmingLanguage: this.CreateCodeRunning.programmingLanguage
        })
    })
    return await response.json();
}