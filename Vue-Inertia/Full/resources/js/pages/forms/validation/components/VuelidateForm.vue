<template>
  <BForm class="row g-3" @submit.prevent="handleVuelidateSubmit">
    <BCol md="4">
      <BFormGroup label="First name">
        <BFormInput type="text" v-model="v.firstName.$model" />
        <div v-if="v.firstName.$error" class="text-danger">First name is required.</div>
      </BFormGroup>
    </BCol>

    <BCol md="4">
      <BFormGroup label="Last name">
        <BFormInput type="text" v-model="v.lastName.$model" />
        <div v-if="v.lastName.$error" class="text-danger">Last name is required.</div>
      </BFormGroup>
    </BCol>

    <BCol md="4">
      <BFormGroup label="Username">
        <BInputGroup>
          <BInputGroupText>@</BInputGroupText>
          <BFormInput type="text" v-model="v.username.$model" />
        </BInputGroup>
        <div v-if="v.username.$error" class="text-danger">Username is required.</div>
      </BFormGroup>
    </BCol>

    <BCol md="6">
      <BFormGroup label="City">
        <BFormInput type="text" v-model="v.city.$model" />
        <div v-if="v.city.$error" class="text-danger">City is required.</div>
      </BFormGroup>
    </BCol>

    <BCol md="3">
      <BFormGroup label="State">
        <b-form-select v-model="v.state.$model">
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </b-form-select>
        <div v-if="v.state.$error" class="text-danger">State is required.</div>
      </BFormGroup>
    </BCol>

    <BCol md="3">
      <BFormGroup label="Zip">
        <BFormInput v-model="v.zip.$model" type="text" />
        <div v-if="v.zip.$error" class="text-danger">Zip code is required.</div>
      </BFormGroup>
    </BCol>

    <BCol cols="12">
      <BFormCheckbox v-model="v.isAgree.$model">Agree to terms and conditions</BFormCheckbox>
      <div v-if="v.isAgree.$error" class="text-danger">Please agree with our terms.</div>
    </BCol>

    <BCol cols="12">
      <BButton variant="primary" type="submit"> Submit form </BButton>
    </BCol>
  </BForm>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { BButton, BCol, BForm, BFormCheckbox, BFormGroup, BFormInput, BInputGroup } from 'bootstrap-vue-next'
import { computed, reactive } from 'vue'

const vuelidateState = reactive({
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  isAgree: undefined
})

const vuelidateRules = computed(() => ({
  firstName: { required },
  lastName: { required },
  username: { required },
  city: { required },
  state: { required },
  zip: { required },
  isAgree: { required }
}))

const v = useVuelidate(vuelidateRules, vuelidateState)

const handleVuelidateSubmit = async () => {
  const result = await v.value.$validate()
}
</script>
