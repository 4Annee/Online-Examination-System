export async function getProgrammingLanguages() {
    try {
        const response = await fetch('http://localhost:5200/api/ProgrammingLanguages');
        return await response.json();
    } catch (error) {
        return [];
    }
}