<script setup lang="ts">
import {object, string, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'
import {useUserStore} from "~/stores/auth";

const schema = object({
  email: string().email('Neteisingas el. pašto adresas').required('El. Pašto laukas yra privalomas'),
  password: string()
      .min(8, 'Minimalus slaptažodžio lauko ilgis 8 simboliai')
      .required('Slaptažodžio laukas yra privalomas')
})

type Schema = InferType<typeof schema>

const form = reactive({
  email: undefined,
  password: undefined
})

const userStore = useUserStore();
const router = useRouter();
async function onSubmit(event: FormSubmitEvent<Schema>) {

  const {email, password} = event.data;
  await userStore.login(email, password);

}

</script>

<template>
  <div class="xl:w-1/3 lg:w-1/3 md:w-1/2 w-full flex flex-col mt-10">

    <UCard>
      <template #header>
        <p class="text-xl">Prisijungimo langas</p>
      </template>
      <div class="space-y-4">
        <UForm :schema="schema" :state="form" class="space-y-4" @submit="onSubmit">

          <UFormGroup label="El. paštas" name="email">
            <UInput v-model="form.email"/>
          </UFormGroup>

          <UFormGroup label="Slaptažodis" name="password">
            <UInput v-model="form.password" type="password"/>
          </UFormGroup>

          <UButton label="Prisijungti administracijai" icon="unjs:std-env" type="submit" color="gray" block/>
        </UForm>
        <UDivider label="Arba"/>

        <UButton color="gray" label="Prisijungti dėstytojams" icon="skill-icons:windows-light" block/>
      </div>
    </UCard>

  </div>
</template>