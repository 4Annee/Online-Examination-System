export async function CreateQuestionSkeletone() {
    const response = await fetch('http://localhost:5200/api/QuestionSkeletons', {
        methode: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            codeQuestionId: this.CreateQuestionSkeletone.codeQuestionId,
            programmingLanguageId: this.CreateQuestionSkeletone.programmingLanguageId,
            code: this.CreateQuestionSkeletone.code
        })
    })
    return await response.json();
}

export async function UpdateQuestionSkeletone() {
    const response = await fetch('http://localhost:5200/api/QuestionSkeletons/{id}', {
        methode: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: this.UpdateQuestionSkeletone.id,
            question: this.UpdateQuestionSkeletone.question,
            codeQuestionId: this.CreateQuestionSkeletone.codeQuestionId,
            programmingLanguage: this.UpdateQuestionSkeletone.programmingLanguage,
            programmingLanguageId: this.CreateQuestionSkeletone.programmingLanguageId,
            code: this.CreateQuestionSkeletone.code
        })
    })
    return await response.json();
}

export async function DeleteQuestionSkeletone() {
    const response = await fetch('http://localhost:5200/api/QuestionSkeletons/{id}', {
        methode: 'DELETE',
        headers: { "x-rapidapi-host": "localhost:5200" }
    })
    return await response.json();
}

export async function GetQuestionSkeletone() {
    const response = await fetch('http://localhost:5200/api/QuestionSkeletons/{id}', {
        methode: 'GET',
        headers: { "x-rapidapi-host": "localhost:5200" }
    })
    return await response.json();
}