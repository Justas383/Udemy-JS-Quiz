function isValidQuestionsItem(item) {
    if (typeof item !== 'object' ||
        Array.isArray(item) ||
        typeof item.questionNr !== 'string'||
        typeof item.question !== 'string' ||
        typeof item.ans1 !== 'string' ||
        typeof item.ans2 !== 'string' ||
        typeof item.ans3 !== 'string' ||
        typeof item.ans4 !== 'string' ||
        typeof item.name !== 'string' ||
        typeof item.questionNr !== 'string' ||
        item.questionNr === ''||
        item.question === '' ||
        item.ans1 === '' ||
        item.ans2 === '' ||
        item.ans3 === ''||
        item.name === ''||
        item.questionNr === '' ) {
        return false;
    }
    return true;
}

export { isValidQuestionsItem }