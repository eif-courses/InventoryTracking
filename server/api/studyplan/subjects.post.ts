import {createSubject, SubjectRequest} from "~/data/subjects";

export default defineEventHandler(async (event) => {

    const {title, description} = await readBody(event)

    const subject: SubjectRequest = {
        title: title,
        description: description
    }
    return createSubject(subject)

});