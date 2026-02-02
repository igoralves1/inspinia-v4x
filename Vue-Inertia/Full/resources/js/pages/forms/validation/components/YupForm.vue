<template>
  <BForm class="row g-3" @submit.prevent="handleYupSubmit">
    <div v-if="error.length > 0" class="text-danger">{{ error }}</div>
    <BCol md="4">
      <BFormGroup label="First name">
        <BFormInput type="text" v-model="yupState.firstName" />
      </BFormGroup>
    </BCol>

    <BCol md="4">
      <BFormGroup label="Last name">
        <BFormInput type="text" v-model="yupState.lastName" />
      </BFormGroup>
    </BCol>

    <BCol md="4">
      <BFormGroup label="Username">
        <b-input-group>
          <b-input-group-text>@</b-input-group-text>
          <BFormInput type="text" v-model="yupState.username" />
        </b-input-group>
      </BFormGroup>
    </BCol>

    <BCol md="6">
      <BFormGroup label="City">
        <BFormInput type="text" v-model="yupState.city" />
      </BFormGroup>
    </BCol>

    <BCol md="3">
      <BFormGroup label="State">
        <b-form-select v-model="yupState.state">
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </b-form-select>
      </BFormGroup>
    </BCol>

    <BCol md="3">
      <BFormGroup label="Zip">
        <BFormInput v-model="yupState.zip" type="text" />
      </BFormGroup>
    </BCol>

    <BCol cols="12">
      <BFormCheckbox v-model="yupState.isAgree">Agree to terms and conditions</BFormCheckbox>
    </BCol>

    <BCol cols="12">
      <BButton variant="primary" type="submit"> Submit form </BButton>
    </BCol>
  </BForm>
</template>

<script setup lang="ts">
import { BButton, BCol, BFormCheckbox, BFormGroup, BFormInput } from 'bootstrap-vue-next'
import { reactive, ref } from 'vue'
import { boolean, type InferType, object, string } from 'yup'

const error = ref('')
const yupSchema = object({
  isAgree: boolean().required('Please agree with our terms'),
  zip: string().min(6, 'Must be at least 6 characters').required('Zip code is Required'),
  state: string().required('State is Required'),
  city: string().required('City is Required'),
  username: string().required('Username is Required'),
  lastName: string().required('Last name is Required'),
  firstName: string().required('First name is Required')
})
type Schema = InferType<typeof yupSchema>
const yupState = reactive({
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  isAgree: undefined
})
const handleYupSubmit = async (event: Event) => {
  await yupSchema
    .validate(yupState)
    .then((res) =>
      // validated data
      console.log(res)
    )
    .catch((e) => {
      return (error.value = e.message)
    })
}
</script>
