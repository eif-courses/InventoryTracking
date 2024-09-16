<!--<script setup lang="ts">-->

<!--interface Subject {-->
<!--  id: number;-->
<!--  title: string;-->
<!--  description: string;-->
<!--}-->

<!--const {data: subjects, pending, error, refresh} = useFetch<Subject[]>('http://localhost:5254/studyplan/subjects');-->
<!--const selected = ref([subjects[1]]);-->

<!--const title = ref<string>('');-->
<!--const description = ref<string>('');-->


<!--const items = (row) => [-->
<!--  [{-->
<!--    label: 'Edit',-->
<!--    icon: 'i-heroicons-pencil-square-20-solid',-->
<!--    click: () => console.log('Edit', row.id)-->
<!--  }, {-->
<!--    label: 'Duplicate',-->
<!--    icon: 'i-heroicons-document-duplicate-20-solid'-->
<!--  }], [{-->
<!--    label: 'Archive',-->
<!--    icon: 'i-heroicons-archive-box-20-solid'-->
<!--  }, {-->
<!--    label: 'Move',-->
<!--    icon: 'i-heroicons-arrow-right-circle-20-solid'-->
<!--  }], [{-->
<!--    label: 'Delete',-->
<!--    icon: 'i-heroicons-trash-20-solid'-->
<!--  }]-->
<!--]-->

<!--const columns = [-->
<!--  {-->
<!--    key: 'title',-->
<!--    label: 'Title'-->
<!--  }, {-->
<!--    key: 'description',-->
<!--    label: 'Description'-->
<!--  }, {-->
<!--    key: 'actions'-->
<!--  }]-->


<!--// Function to create a new subject-->
<!--const createSubject = async () => {-->
<!--  const newSubject = {-->
<!--    "subject": {-->
<!--      "title": title.value,-->
<!--      "description": description.value-->
<!--    }-->
<!--  };-->

<!--  // POST request to create the new subject-->
<!--  await useFetch('http://localhost:5254/studyplan/subjects', {-->
<!--    method: 'POST',-->
<!--    body: newSubject-->
<!--  });-->

<!--  // After creating the subject, refresh the subjects data-->
<!--  await refresh(); // This refreshes the subjects data after creating the new one-->
<!--};-->


<!--</script>-->

<!--<template>-->
<!--  <div>-->

<!--    <UCard class="p-4 flex">-->
<!--      <UInput v-model="title" placeholder="Enter Title"/>-->
<!--      <UInput v-model="description" placeholder="Enter Description"/>-->
<!--      <UButton @click="createSubject"> Create Subject</UButton>-->
<!--    </UCard>-->
<!--    <UTable v-model="selected" :rows="subjects" :columns="columns">-->
<!--      <template #actions-data="{ row }">-->
<!--        <UDropdown :items="items(row)">-->
<!--          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid"/>-->
<!--        </UDropdown>-->
<!--      </template>-->
<!--    </UTable>-->
<!--  </div>-->
<!--</template>-->
<template></template>