<script setup lang="ts">


interface Subject {
  id: number;
  title: string;
  description: string;
}

interface GetSubjectResponse {
  subjects: Subject[];
}


const title = ref<string>('');
const description = ref<string>('');


const { data: subjects, pending, error, refresh } = useFetch('http://localhost:5254/studyplan/subjects');

// Function to create a new subject
const createSubject = async () => {
  const newSubject = {
    "subject": {
      "title": title.value,
      "description": description.value
    }
  };

  // POST request to create the new subject
  await useFetch('http://localhost:5254/studyplan/subjects', {
    method: 'POST',
    body: newSubject
  });

  // After creating the subject, refresh the subjects data
  await refresh(); // This refreshes the subjects data after creating the new one
};


</script>

<template>
  <div>

    <UCard class="p-4 flex">
      <UInput v-model="title" placeholder="Enter Title"/>
      <UInput v-model="description" placeholder="Enter Description"/>
      <UButton @click="createSubject"> Create Subject</UButton>
    </UCard>
    <UTable :rows="subjects"/>
  </div>
</template>
