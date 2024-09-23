export interface SubjectResponse {
    id: number;
    title: string;
    description: string;
}

export interface SubjectRequest {
    title: string;
    description: string;
}

export const getSubjectsUrl = 'https://studyplannersoft-production.up.railway.app/studyplan/subjects';

export const createSubject = (subject: SubjectRequest) => {
    return $fetch(getSubjectsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(subject)
    })
};

